
# 🎥 QuickShow — Movie Ticket Booking Platform

QuickShow is a full-stack web application designed for seamless movie ticket booking. The platform features a dual interface: one for **Admin Management** and another for **User Bookings**, with integrated payment and email notification services.

---

## 📑 Features

### 🎛️ Admin Panel
- **Dashboard**: Overview of all bookings, shows, and revenues.
- **Add Shows**: Add new movies with showtimes, poster, genre, description, and seat capacity.
- **List Shows**: View and manage the list of added shows.
- **List Bookings**: Access and manage all user bookings.

### 🎟️ User Panel
- **Browse Movies**: View movies and available showtimes added by the admin.
- **Book Tickets**:
  - Select movie, date, time, and seats.
  - Make secure payments using **Stripe**.
- **Email Notifications**:
  - Instant confirmation email after successful booking.
  - Reminder email sent **8 hours before the showtime**.
- **Favorite Movies**:
  - Users can add any movie to their personal favorites list.

---

## 🛠️ Tech Stack

### 📱 Frontend
- **React.js** with **Vite**
- **TailwindCSS** for styling
- **React Router** for routing
- **Clerk** for user authentication
- **Axios** for HTTP requests

### 🖥️ Backend
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **Stripe** for payment processing
- **Clerk** for secure authentication
- **Inngest** for scheduled/reminder jobs
- **Nodemailer** for email delivery

### 🔗 APIs
- **TMDB API** — Fetch movie details and posters
- **Stripe API** — Payment gateway
- **Clerk API** — Authentication management

### 🚀 Deployment
- **Vercel** for frontend & backend hosting
- **MongoDB Atlas** for cloud database

---

## 📦 Project Structure

```
QuickShow/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── main.jsx
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── .env
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── inngest/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- TMDB API Key (v4)
- Stripe account (for payments)
- Clerk account (for authentication)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yashkumargupta12345/QuickShow.git
cd QuickShow
```

---

### 2️⃣ Setup Environment Variables

**Backend (`server/.env`):**

```
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
TMDB_API_KEY=your_tmdb_v4_bearer_token
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
SENDER_EMAIL=your_email@example.com
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

**Frontend (`client/.env`):**

```
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

---

### 3️⃣ Install Dependencies

**Backend:**

```bash
cd server
npm install
```

**Frontend:**

```bash
cd ../client
npm install
```

---

### 4️⃣ Run the Application

**Start Backend:**

```bash
cd server
npm run server
```

**Start Frontend:**

```bash
cd ../client
npm run dev
```

---

### 5️⃣ Stripe Webhook (for local development)

```bash
stripe listen --forward-to localhost:3000/api/stripe
```

---

## 💻 Usage

- Visit `http://localhost:5173`
- Sign up/login with Clerk
- Browse movies, book tickets, and manage your bookings
- Set your Clerk user's `privateMetadata.role` to `admin` to access admin routes.

---

## 📊 Admin Features

| Route                  | Description                          |
|:----------------------|:--------------------------------------|
| `/admin`               | Dashboard overview                    |
| `/admin/add-shows`     | Add new movie shows                    |
| `/admin/list-shows`    | View all added shows                   |
| `/admin/list-bookings` | View all user bookings                 |

---

## ⚠️ Important Notes

- **Stripe Webhooks:** Must be set up for payment status to update bookings (`isPaid`).
- **Admin Access:** Only users with `role: admin` in Clerk metadata can access admin routes.
- **Email Sending:** Configure SMTP credentials properly for email notifications.

---

## 📢 Credits

- Movie data from **TMDB**
- Payments via **Stripe**
- Authentication via **Clerk**

---

## 📜 License

Licensed under the [MIT License](LICENSE).
