# Abissal Blessed

A fullstack e-commerce web application for an urban streetwear brand. Users can browse products, manage a cart, authenticate, and checkout via Stripe.

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router v7
- Axios
- Stripe.js

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Stripe

## Project Structure

```
abissal-blessed/
├── src/                        # Frontend (React)
│   ├── components/
│   │   ├── Auth/               # Login, Register
│   │   ├── Cart/               # Cart page + Stripe checkout
│   │   ├── ContactForm/        # Contact form
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   └── Products/           # Product listing + AddProduct
│   ├── context/
│   │   └── AuthContext.jsx     # Global auth state
│   ├── api.js                  # Shared axios instance
│   └── main.jsx
└── server/                     # Backend (Express)
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── index.js
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- Stripe account

### Environment Variables

**`server/.env`**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**`.env`** (frontend root)
```
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Installation

**Install frontend dependencies:**
```bash
npm install
```

**Install backend dependencies:**
```bash
cd server
npm install
```

### Running the App

**Start the backend:**
```bash
cd server
npm run dev
```

**Start the frontend** (in a separate terminal):
```bash
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:3000`.

## Features

- Browse and add products to cart
- Persistent cart via localStorage
- User registration and login with JWT authentication
- Stripe checkout integration
- Contact form
- Admin product creation via AddProduct component
