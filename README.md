
# 🚀 Secure Subscription API

Hi this is Siddhant presenting you a production-ready, RESTful backend API for managing user subscriptions — built with security, modularity, and scalability in mind. Designed to impress recruiters and support real-world SaaS models.

---

## 🔧 Tech Stack

- **Node.js** + **Express** – Web server & API framework
- **MongoDB** + **Mongoose** – Database & object modeling
- **JWT** – JSON Web Tokens for secure authentication
- **bcrypt.js** – Password hashing
- **Arcjet** – Bot & rate-limit protection
- **Upstash QStash + Workflow** – Serverless background job scheduling
- **dotenv** – Environment variable management
- **cookie-parser** – Secure cookie handling
- **nodemailer** – (Optional) Email notifications

---

## 📂 Folder Structure

```
├── controllers/          # Route logic
├── routes/               # API endpoints
├── models/               # Mongoose schemas
├── config/               # Env, DB, QStash, Arcjet configs
├── middlewares/          # Auth & security layers
├── app.js                # Main entry point
└── .env.*.local          # Environment-specific config
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/secure-subscription-api.git
   cd secure-subscription-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a file named `.env.development.local` and add:

   ```env
   PORT=8080
   NODE_ENV=development
   DB_URI=mongodb://localhost:27017/subscriptiondb
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1d
   SERVER_URL=http://localhost:8080

   # Upstash
   QSTASH_TOKEN=your_qstash_token
   QSTASH_URL=https://qstash.upstash.io/v2/publish

   # Arcjet
   ARCJET_KEY=your_arcjet_key
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Expose your server for QStash (for testing workflows, in case you face error 500)**
   ```bash
   ngrok http 8080
   ```

---

## 🧪 Test Endpoints

Use Postman or curl to test:

### Signup
```http
POST /api/v1/auth/sign-up
```

### Login
```http
POST /api/v1/auth/sign-in
```

### Create Subscription
```http
POST /api/v1/subscriptions
```

---

## 📌 Highlights

- 🛡️ Arcjet-based bot + rate limit protection
- 🧠 Modular controller-service structure
- 🪝 Serverless workflows using Upstash
- 🔐 Fully authenticated via JWT
- ☁️ Easily extendable to any frontend or mobile app

---

## Summary

This project is designed to showcase:
- Real-world backend architecture
- Scalable subscription logic
- Secure middleware layering
- Third-party integrations for automation

---

## 📄 License

MIT — use it for learning, hiring, or building your own startup backend!

---
