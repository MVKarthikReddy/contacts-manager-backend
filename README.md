# Backend For Contact Managing App

## Overview

This README file provides essential information about the Backend Contact Managing App, a Node.js application that serves as the backend component of a contact management system. The backend handles data storage, retrieval, and management using MongoDB as the database.

## Features

- **Contact CRUD Operations**: Allows users to Create, Read, Update, and Delete contact information.
- **MongoDB Integration**: Utilizes MongoDB to store and manage contact data efficiently.
- **RESTful API**: Provides a RESTful API for easy integration with frontend or other applications.
- **Authentication**: Supports user authentication to secure contact data.
- **Validation**: Validates user input to ensure data integrity.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A web application framework for Node.js, used for building the RESTful API.
- **MongoDB**: A NoSQL database used for storing contact data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, simplifying database interactions.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **bcrypt**: A library for hashing passwords before storing them in the database.

## Prerequisites

Before you can run this backend application, make sure you have the following installed:

- **Node.js**: Download and install it from the [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Install MongoDB following the instructions on the [MongoDB Official Website](https://docs.mongodb.com/manual/installation/).

## Installation

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/MVKarthikReddy/backend-contact-managing-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-contact-managing-app
   ```

3. Install the required Node.js packages:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure the following environment variables:

   ```env
   PORT=5001  # Port on which the server will run
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key-for-jwt
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

The backend server will start and be accessible at `http://localhost:5001`.

## API Endpoints

- **GET /api/contacts**: Retrieve a list of all contacts.
- **GET /api/contacts/:id**: Retrieve a specific contact by ID.
- **POST /api/contacts**: Create a new contact.
- **PUT /api/contacts/:id**: Update an existing contact by ID.
- **DELETE /api/contacts/:id**: Delete a contact by ID.

Detailed API documentation and request/response examples should be provided separately for easier integration.

## Authentication

- To access protected endpoints, clients must include a valid JWT token in the `Authorization` header of their requests.
- Users can obtain a JWT token by logging in via an authentication endpoint (e.g., `/api/users/login/`).

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your commit message here"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request from your forked repository to the original repository.

