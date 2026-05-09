# 🚀 Team Task Manager

A full-stack Team Task Management System built using **React.js**, **FastAPI**, and **SQLite/SQL Server**.

This application helps teams manage tasks, assign work, track progress, and collaborate efficiently.

---

# 📌 Features

- 🔐 User Authentication (Register/Login)
- 👤 Role-Based Access (Admin/User)
- 📋 Create, Update, Delete Tasks
- ✅ Task Status Management
- 👥 Team Collaboration
- 📊 Dashboard UI
- ⚡ FastAPI REST APIs
- 🎨 Modern React Frontend
- 🚀 Railway Deployment

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- FastAPI
- SQLAlchemy
- SQLite / SQL Server
- JWT Authentication
- Passlib (bcrypt)

---

# 📂 Project Structure

```bash
Team-Task-Manager/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── auth.py
│   ├── models.py
│   ├── routes/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Backend Setup

## 1️⃣ Navigate to Backend

```bash
cd backend
```

## 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

## 3️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

## 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

## 5️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

Swagger Documentation:

```bash
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

## 1️⃣ Navigate to Frontend

```bash
cd frontend
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
DATABASE_URL=sqlite:///./teamtask.db
JWT_SECRET=mysecretkey
```

---

# 🚀 Deployment

## Backend
Deployed on Railway

## Frontend
Deployed on Vercel

---

# 📷 Screenshots

Add your project screenshots here.

---

# 👨‍💻 Author

## Abdey Ali

- Full Stack Developer
- Python Developer
- React Developer

---

# ⭐ Future Improvements

- Real-time Notifications
- Team Chat System
- File Upload Support
- Email Notifications
- Dark Mode
- Analytics Dashboard

---

# 📄 License

This project is licensed under the MIT License.
