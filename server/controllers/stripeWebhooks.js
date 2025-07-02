import stripe from "stripe";
import Booking from '../models/Booking.js'
import { inngest } from "../inngest/index.js";


export const stripeWebhooks = async (request, response) => {
    console.log("stripe webhook received")
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers["stripe-signature"];
    let event;
    try {
        console.log("entering into try catch block")
        event = stripeInstance.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
        console.log("webhook received")
    } catch (error) {
        return response.status(400).send(`Webhook Error: ${error.message}`);
    }


    try {
        console.log("entering into switch section")
        switch (event.type) {
            case "payment_intent.succeeded": {
                const paymentIntent = event.data.object;
                const sessionList = await stripeInstance.checkout.sessions.list({
                    payment_intent: paymentIntent.id
                })

                const session = sessionList.data[0]
                const { bookingId } = session.metadata;

                console.log('entering the updating section')


                const result = await Booking.findByIdAndUpdate(bookingId, {
                    isPaid: true,
                    paymentLink: ""
                })

                console.log('isPaid updated to true')

                // Send confirmation Email
                await inngest.send({
                    name: "app/show.booked",
                    data: { bookingId }
                })

                break;
            }

            default:
                console.log('Unhandled event type:', event.type)
        }
        response.json({ received: true })
    } catch (err) {
        console.error("Webhook processing error:", err);
        response.status(500).send("Internal Server Error");
    }
}












