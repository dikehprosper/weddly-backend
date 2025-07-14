# Wedding Coordinator Marketplace – Backend API

A simple backend API for a **Wedding Coordinator Marketplace MVP**, built with **Express.js** and **MongoDB**.

---
## 📌 Features

- 🗂️ Coordinator Listing (Name, Location, Price, Profile Photo)
- 📄 Coordinator Details (Bio, Availability)
- 💌 Booking Request Submission
- 🌐 REST API built with Express & Mongoose
- 🛡️ CORS enabled.



---
## 🚀 API Documentation

### Base URL


---
### Endpoints

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| GET | `/coordinators` | Fetch all coordinators |
| GET | `/coordinators/:id` | Get specific coordinator details |
| POST | `/bookings` | Create a booking |



---
### GET `/coordinators`
Fetches a list of all available wedding coordinators.


##### Response
```json
[
  {
    "_id": "id",
    "name": "Jane Doe",
    "location": "Lagos, Nigeria",
    "price": 3000,
    "profilePhoto": "https://...",
    "bio": "Experienced planner...",
    "unavailableDates": ["2025-07-20", "2025-08-01"]
  }
]


## Project Structure

 backend/
│
├── models/
│   ├── Coordinator.js
│   └── Booking.js
│
├── routes/
│   ├── coordinatorRoutes.js
│   └── bookingRoutes.js
│
├── .env
├── server.js
└── package.json




## Setup Instructions

#### Clone the repo
git clone https://github.com/dikehprosper/wedding-backend.git
cd backend

#### Install dependencies
npm install

#### Setup environment variables
cp .env.example .env

#### Start development server
npm run dev

Backend runs on http://localhost:5000




## Deployment
#### Backend: Render

#### Database: MongoDB

#### Author
Prosper – [https://dikeprosper.vercel.app/]
Twitter - [https://x.com/DikeProsper]
Linkedin - [https://www.linkedin.com/in/dikeprosper]
