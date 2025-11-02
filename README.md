# 🏪 Sweet Shop Management System

## 📋 Overview
The **Sweet Shop Management System** is a full-stack web application designed to manage sweets, inventory, and user operations.  
It enables customers to browse, search, and purchase sweets, while admins can add, update, delete, and restock sweets in real time.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Role-based access (User / Admin)

### 🍬 Sweet Management
- Add, update, and delete sweets *(Admin only)*
- View all sweets
- Search sweets by name, category, or price range

### 📦 Inventory Management
- Purchase sweets (decrease quantity)
- Restock sweets *(Admin only)*
- Disable purchase button for out-of-stock sweets

### 💻 Frontend
- Responsive single-page application (SPA)
- Search, filter, and purchase features
- Admin dashboard for sweet management

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (with Tailwind CSS / Material UI) |
| **Backend** | Node.js (Express + TypeScript) |
| **Database** | MongoDB (with Mongoose ORM) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Testing** | Jest + Supertest (Backend), React Testing Library (Frontend) |
| **Version Control** | Git + GitHub |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sonikaa07/Sweet_Shop.git
cd Sweet_Shop
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
cp .env.example .env   
npm run dev
The backend runs on http://localhost:5000

Example .env configuration:

env
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sweetshop
JWT_SECRET=your_secret_key
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
The frontend runs on http://localhost:3000

4️⃣ Running Tests
Backend:

bash
Copy code
npm run test
Frontend:

bash
Copy code
npm run test
✅ API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT token

Sweets (Protected)
Method	Endpoint	Description
POST	/api/sweets	Add a new sweet (Admin only)
GET	/api/sweets	Get all sweets
GET	/api/sweets/search	Search sweets by filters
PUT	/api/sweets/:id	Update a sweet (Admin only)
DELETE	/api/sweets/:id	Delete a sweet (Admin only)

Inventory (Protected)
Method	Endpoint	Description
POST	/api/sweets/:id/purchase	Purchase a sweet
POST	/api/sweets/:id/restock	Restock a sweet (Admin only)

🧪 Test-Driven Development (TDD)
Followed Red → Green → Refactor workflow.

Tests written before implementation for each feature.

Covered authentication, CRUD, and inventory logic.

Used Jest and Supertest for API integration tests.

Maintained modular test structure for scalability.

🧾 My AI Usage
AI tools were used selectively to enhance productivity — focusing on structure, code clarity, and documentation formatting.
All core logic, testing, and debugging were done manually, ensuring full understanding of the system.

Tools Used:

GitHub Copilot: Suggested boilerplate Mongoose models and Express route patterns.

ChatGPT (OpenAI): Assisted in refining documentation, commit message style, and TDD workflow outline.

Usage Summary:

Drafted initial Express route scaffolds and MongoDB schema outlines (later customized).

Received guidance for setting up environment variables and API endpoint documentation.

Helped format this README and maintain consistent code structure.

Reflection:
AI helped streamline setup and repetitive coding tasks, allowing focus on testing, validation, and architecture.
All AI-assisted code was thoroughly reviewed, tested, and modified before final use.

