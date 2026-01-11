# 🚀 Book Management REST API  
### _Node.js + TypeScript + SQLite_

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-TS-blue)
![SQLite](https://img.shields.io/badge/SQLite-Local%20Storage-orange)
![REST API](https://img.shields.io/badge/REST-API-lightgrey)

---

## 📌 Overview

**Book Management REST API** is a backend service that allows users to manage a collection of books.  
The API supports:

- 📚 **CRUD operations** on books  
- 🗂 **Bulk CSV import** with manual validation  
- 💾 **SQLite** persistent storage  
- 📄 **Type-safe** code with TypeScript  
- ⚡ **Logging** using Morgan  
- 🧪 **Unit tests** with Jest  

---

## 🛠️ Tech Stack

- **Node.js** – runtime environment  
- **TypeScript** – type safety  
- **Express.js** – REST API server  
- **SQLite (better-sqlite3)** – local persistent storage  
- **Multer** – file uploads (CSV import)  
- **Morgan** – request logging  
- **Jest + Supertest** – unit testing  

---

## 📂 Project Structure

book-management-api/
├── src/
│ ├── controllers/
│ │ └── book.controller.ts # Handles request/response logic
│ ├── services/
│ │ └── book.service.ts # Business logic and DB access
│ ├── models/
│ │ └── book.model.ts # Book type definition
│ ├── db/
│ │ └── sqlite.ts # SQLite database initialization
│ ├── routes/
│ │ └── book.routes.ts # API route definitions
│ ├── middlewares/
│ │ └── error.middleware.ts # Centralized error handling
│ ├── utils/
│ │ └── csvParser.ts # CSV parsing + validation
│ ├── tests/
│ │ └── book.test.ts # Unit tests
│ ├── app.ts # Express app setup
│ └── server.ts # App entry point
├── data/
│ └── books.db # SQLite database (runtime)
├── .env # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md


---

## ⚙️ Setup & Installation  

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/book-management-api.git
cd book-management-api
```
### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Create a .env file:
```bash  
cp .env.example .env
```   

### 4️⃣ Start the development server
```bash  
npm run dev
Server runs at: http://localhost:3000
```
---

## 🔌 API Endpoints

```bash

Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add a new book
PUT	/books/:id	Update an existing book
DELETE	/books/:id	Delete a book
POST	/books/import	Bulk CSV import (form-data)
```

---

## 📄 CSV Import Format

```bash
title,author,publishedYear
Clean Code,Robert Martin,2008
The Pragmatic Programmer,Andrew Hunt,1999
```

```bash
Example Response

{
  "added": 2,
  "errors": [
    { "row": 3, "message": "Invalid data" }
  ]
}

```

---

## ⚠️ Edge Case Handling
```bash
The service gracefully handles:

    Empty or missing fields in CSV import
    Book not found for GET/PUT/DELETE requests
    Invalid CSV rows with clear error messages
    Logging requests via Morgan
    Invalid inputs for endpoints   
```

---

## 🧪 Running Tests  
```bash
npm test
```

---

## 💾 Database
```bash
    Uses SQLite for persistent storage
    Database path configurable via .env (DB_PATH)
    Automatically creates books table if not exists
```

---

## 🔧 Logging

```bash
    Morgan logs HTTP requests
    Development: dev format
    Production: combined format
    Centralized error handling middleware ensures structured error responses
```

---

## 👤 Author

```bash
Sabil Danish

```
---