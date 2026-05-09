Team Task Manager 🚀

A full-stack Team Task Management System built using React.js, FastAPI, and SQLite/SQL Server.
This application helps teams manage tasks, assign work, track progress, and collaborate efficiently.

📌 Features
🔐 User Authentication (Register/Login)
👤 Role-Based Access (Admin/User)
📋 Create, Update, Delete Tasks
✅ Task Status Management
👥 Team Collaboration
📊 Dashboard UI
⚡ FastAPI Backend
🎨 React Frontend
🌐 REST API Integration
🚀 Railway Deployment
🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Axios
React Router DOM
Backend
FastAPI
SQLAlchemy
SQLite / SQL Server
JWT Authentication
Passlib (bcrypt)
📂 Project Structure
Team-Task-Manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── database.py
│   ├── main.py
│   └── requirements.txt
│
└── README.md
⚙️ Backend Setup
1️⃣ Navigate to Backend
cd backend
2️⃣ Create Virtual Environment
python -m venv venv
3️⃣ Activate Virtual Environment
Windows
venv\Scripts\activate
Linux/Mac
source venv/bin/activate
4️⃣ Install Dependencies
pip install -r requirements.txt
5️⃣ Run Backend Server
uvicorn main:app --reload

Backend runs on:

http://127.0.0.1:8000

Swagger Docs:

http://127.0.0.1:8000/docs
💻 Frontend Setup
1️⃣ Navigate to Frontend
cd frontend
2️⃣ Install Dependencies
npm install
3️⃣ Run Frontend
npm run dev

Frontend runs on:

http://localhost:5173
🔑 Environment Variables

Create a .env file inside backend folder:

DATABASE_URL=sqlite:///./teamtask.db
JWT_SECRET=mysecretkey
🚀 Deployment
Backend Deployment
Railway
Frontend Deployment
Vercel
📷 Screenshots

Add project screenshots here.

👨‍💻 Author
Abdey Ali
Full Stack Developer
Python & React Developer
Backend Enthusiast
⭐ Future Improvements
Real-time Notifications
Team Chat System
File Upload Support
Email Notifications
Dark Mode
Analytics Dashboard
