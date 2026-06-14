# Quirex - Real Estate Property Platform

## Overview

Quirex is a MERN Stack based real estate platform that simplifies the process of buying, selling, and renting properties. The platform connects users with verified property listings and trusted agents, providing a secure and user-friendly experience.

## Features

### General User Features

* Home Page
* About Us
* Contact Us
* Property Listings
* User Registration
* User Login
* Property Search & Filters
* Property Details with Images
* Customer Feedback

### Admin Features

* Admin Login
* Dashboard Management
* Add New Properties
* Manage Property Listings
* View User Enquiries
* Manage Registered Users
* Block/Unblock Users
* Edit Profile
* Logout Functionality

### User Dashboard Features

* View Available Properties
* Buy Properties
* View Purchased Properties
* Manage Profile
* Logout

## Objectives

* Provide property options for buying, selling, and renting.
* Offer verified property listings.
* Enable easy property search using filters.
* Display transparent pricing information.
* Deliver a simple and user-friendly interface.
* Improve trust through customer feedback and reviews.

## Technology Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Bootstrap / Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Tools

* VS Code
* Git & GitHub
* Postman

## Project Structure

```bash
Quirex/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/quirex.git
cd quirex
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Future Enhancements

* Online Property Booking
* Payment Gateway Integration
* Live Chat Support
* Google Maps Integration
* Property Recommendation System
* AI Based Property Search

## Author

Developed by: Sanjeet yadav

## License

This project is developed for educational and learning purposes.
