# Skoolify

Skoolify is a school discovery and opportunity platform that connects parents, students and schools in one place.

The idea behind the project is to make it easier for parents and students to find schools, check available vacancies, view school information and request school visits. Schools can also have their own dashboard where they can manage vacancies and applications.

## Features

### For Parents and Students
- Create an account and sign in
- Search for schools
- Filter schools by location
- View school information
- View available vacancies
- Save schools
- Keep track of school visit bookings
- Manage profile information and settings

### For Schools
- Create a school account
- Access a separate admin dashboard
- View school statistics
- Post and manage vacancies
- View applications
- Manage school profile
- Access school settings
- View school verification status

## Authentication

Firebase Authentication is used for user registration and login.

User information is stored in Firebase Firestore. Different account types are assigned different roles so that parents/students and schools can access their respective dashboards.

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Firebase Authentication
- Firebase Firestore
- React Router
- Lucide React
- Vercel

## Project Structure

The project is separated into different pages and components for the landing page, authentication, user dashboard and school administration dashboard.

The application uses React Router to move between the different pages.

## Getting Started

To run the project locally:

1. Clone the repository.

2. Open the project folder in VS Code.

3. Install the dependencies:

```bash
npm install