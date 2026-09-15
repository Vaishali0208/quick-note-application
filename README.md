# 📝 Quick Note Application

A simple and responsive web application for creating, viewing, and deleting notes.

The application is built using **HTML, CSS, JavaScript, Node.js, and Express.js**. Notes are handled through REST API endpoints.

## 🚀 Live Demo

**Live Application:**
https://quick-note-application-njlw.onrender.com/

## 📂 GitHub Repository

**GitHub:**
https://github.com/Vaishali0208/quick-note-application

## ✨ Features

* Create new notes
* Display saved notes
* Delete notes
* Simple and clean user interface
* Responsive design
* REST API integration
* Node.js and Express.js backend

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Other

* REST API
* JSON
* CORS

## 📁 Project Structure

```text id="4xj2cw"
quick-note-application/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🔌 API Endpoints

### Get Notes

```http id="j1q7vn"
GET /notes
```

Returns all saved notes.

### Create Note

```http id="6f9s3m"
POST /notes
```

Creates a new note.

### Delete Note

```http id="r2p8kx"
DELETE /notes/:id
```

Deletes a note using its ID.

## ⚙️ Installation

### 1. Clone the repository

```bash id="d4x6pm"
git clone https://github.com/Vaishali0208/quick-note-application.git
```

### 2. Open the project

```bash id="w8z1kc"
cd quick-note-application
```

### 3. Install dependencies

```bash id="q3n7vy"
npm install
```

### 4. Start the application

```bash id="a6m2rt"
npm start
```

The application will run at:

```text id="h5k9wd"
http://localhost:5000
```

## 🔄 How It Works

1. User enters a note.
2. Frontend sends the note to the backend.
3. Express server processes the request.
4. The note is stored.
5. Saved notes are displayed on the page.
6. Users can delete notes when needed.

## 👩‍💻 Author

**Vaishali**

GitHub:
https://github.com/Vaishali0208

## 📄 License

This project is created for educational and assignment purposes.
