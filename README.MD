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
https://github.com/dikehprosper/weddly-backend

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

#### Request
GET /api/coordinators

#### Response
##### Successful Response

###### Success
```json
[
  {
  "name": "Jane Doe",
  "location": "Lagos, Nigeria",
  "price": 3000,
  "profilePhoto": "https://...",
  "bio": "Experienced planner...",
  "rating": 4.8,
  "reviews": 25,
  "experience": "7 years",
  "specialty": "Luxury Weddings",
  "languages": ["English", "Yoruba"],
  "unavailableDates": ["2025-07-20", "2025-08-01"]
},....
]
```
##### Status Code
200 OK


##### Possible Error Responses

###### 500 Internal Server Error
```json
{
  "message": "Server error. Please try again later."
}
```
##### Status Code
500 Internal Server Error

###### 404 Not Found
```json
{
  "message": "No coordinators found."
}
```
##### Status Code
404 Not Found




---
### GET `/coordinators/:id`
Fetches detailed information of a specific coordinator using their unique ID.

#### Request
GET /api/coordinators/64c1exampleId

#### Response
##### Successful Response

###### Success
```json
{
  "_id": "64c1exampleId",
  "name": "Jane Doe",
  "location": "Lagos, Nigeria",
  "price": 3000,
  "profilePhoto": "https://...",
  "bio": "Experienced wedding planner with 5+ years of experience...",
  "unavailableDates": ["2025-07-20", "2025-08-01"]
}
```
##### Status Code
200 OK


##### Possible Error Responses

###### 500 Internal Server Error
```json
{
  "message": "Server error. Please try again later."
}
```
##### Status Code
500 Internal Server Error

###### 404 Not Found
```json
{
  "message": "coordinator not found."
}
```
##### Status Code
404 Not Found





---
### GET `/coordinators/:id`
Fetches detailed information of a specific coordinator using their unique ID.

#### Request
POST /api/bookings
Content-Type: application/json

#### Request Body
```json
{
  "coordinatorId": "64c1exampleId",
  "name": "John Smith",
  "email": "john@example.com",
  "weddingDate": "2025-08-15",
  "guestNumber": 150
}
```

#### Responses
##### Successful Response

###### Success
```json
{
  "message": "Booking successful",
  "booking": {
    "_id": "bookingId",
    "coordinatorId": "64c1exampleId",
    "name": "John Smith",
    "email": "john@example.com",
    "weddingDate": "2025-08-15",
    "guestNumber": 150
  }
}
```
##### Status Code
201 Created


##### Possible Error Responses

###### 500 Internal Server Error
```json
{
  "message": "Failed to create booking. Please try again later."
}
```
##### Status Code
500 Internal Server Error


###### 400 Bad Request
```json
{
  "message": "Invalid booking data. Please check all fields and try again."
}
```
##### Status Code
400 Bad Request



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
git clone https://github.com/dikehprosper/weddly-backend.git
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
