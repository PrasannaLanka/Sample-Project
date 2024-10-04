# Sample Login Web Page

This is a sample project for a login web page developed using **React** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** for the database.

## Features

- User registration and login system.
- Password encryption using BCrypt.
- Session management with JSON Web Tokens (JWT).
- Frontend built with React, with a focus on a simple and responsive UI.
- Backend API developed with Spring Boot, using REST principles.
- PostgreSQL as the database to store user credentials securely.
- Global CORS configuration for seamless interaction between frontend and backend.

## Tech Stack

- **Frontend**: React (JavaScript, Axios for API calls, React Hooks)
- **Backend**: Spring Boot (Spring Security, JWT, BCrypt, REST APIs)
- **Database**: PostgreSQL
- **Authentication**: JSON Web Token (JWT)

## Prerequisites

- **Node.js** (for running React frontend)
- **Java 8+** (for Spring Boot backend)
- **PostgreSQL** (for the database)
- **Maven** (for building the Spring Boot project)

### Installation

#### 1. Backend (Spring Boot)

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/yourusername/sample-login-page
   cd sample-login-page/backend
2. Update application.properties with your PostgreSQL configuration
3. Build and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
4. The backend server will run at http://localhost:8080.
#### 2. Front end
Use create react app
