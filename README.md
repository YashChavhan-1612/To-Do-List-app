# To-Do-List-app

# 📝 MERN To-Do List Application (Task-2)

## 📌 Project Overview

This is a simple To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js). The project demonstrates how the frontend communicates with the backend and how data is stored in a database.

---

## 🚀 Features

* Add new tasks
* View all tasks
* Store tasks in MongoDB database
* Responsive and modern UI using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend:

* React (Vite)
* Tailwind CSS
* Axios

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
task-2/
 ├── frontend/
 └── backend/
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd task-2
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=3700
```

Run backend:

```
node server.js
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### ➤ Add Task

* **POST** `/api/add`
* Body:

```
{
  "text": "Sample Task"
}
```

### ➤ Get Tasks

* **GET** `/api/tasks`

---

## 🔄 How It Works

1. User enters a task in the input field
2. React sends a POST request to the backend
3. Backend stores the task in MongoDB
4. React fetches tasks using GET request
5. Tasks are displayed on the UI

---

## 🎯 Learning Outcomes

* Understanding of MERN stack architecture
* API creation using Express
* Database integration using MongoDB
* Frontend-backend communication using Axios

---

## 📸 UI Features

* Clean and modern card-based design
* Gradient background
* Responsive layout
* Interactive task list

---

## 🔥 Future Improvements

* Delete task feature
* Update/edit task
* Mark task as completed
* Authentication (Login/Register)

---

## 👨‍💻 Author

Yash Naresh Chavhan

---

## 📧 Submission

This project is submitted as part of the MERN Stack Internship Task-2.
