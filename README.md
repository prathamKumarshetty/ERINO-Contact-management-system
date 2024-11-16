# ERINO-Contact-management-system

### Add Contact Page
<img width="1440" alt="Screenshot 2024-11-16 at 2 26 50 AM" src="https://github.com/user-attachments/assets/ac3cd283-7f40-423f-945c-e772abcbdb08">


- A form with fields for **First Name**, **Last Name**, **Phone Number**, **Email**, **Company**, and **Job Title**.
- Icons accompany each input field, with **Submit** and **Reset** buttons below.
- Styled with a light blue background and a bold "Add Contact" heading.

 ### Contact List Page 
<img width="1440" alt="Screenshot 2024-11-16 at 2 27 04 AM" src="https://github.com/user-attachments/assets/a3b5ad7e-cc3f-43de-97c8-09bbecd629d1">

- Displays a searchable, paginated table of contacts with columns for **Name**, **Email**, **Phone Number**, **Company**, **Job Title**, and **Actions**.
- **Edit** and **Delete** action icons enable contact management.
- Soft blue theme with clean layout for easy navigation.


## Drive Link for Project

You can access the demonstration of the project through this link:

[Click here to download the file from Google Drive](https://drive.google.com/file/d/1FxQ4BNwaP7TMsyQZNpvCEUuUHSlS9cPi/view?usp=sharing)




## Project Description

This Contact Management System is a full-stack application built with React, Node.js, Express, and MongoDB. It allows users to add, edit, delete, and view contacts with essential details like name, email, phone number, company, and job title. The frontend is designed using Material UI (MUI) to create a clean and responsive user interface, while the backend is powered by Node.js and Express with MongoDB as the database to store contact information.

## Features

- Add new contacts with required details.
- Edit existing contact information.
- Delete contacts.
- Search contacts by any attribute (name, email, phone number, company, or job title).
- Paginated view for easy navigation through large lists of contacts.
- Professional and visually appealing UI using MUI components.

## Technical Decisions

1. **Database Choice**: We chose MongoDB over PostgreSQL because the Contact Management System only requires a single collection to store contacts. MongoDB is well-suited for this as it’s flexible, schema-less, and easily scalable. Since no complex relationships between multiple tables are needed, MongoDB is an efficient choice.
2. **UI Framework**: MUI was chosen for building a consistent, clean, and responsive UI. It provides a wide range of pre-built components, which helped in creating a professional look for the application.

## Project Structure

- **Frontend**: The frontend is built with React and MUI. It consists of two main pages for adding contacts and viewing contacts, managed using React Router.
- **Backend**: The backend is a REST API created using Node.js and Express. It provides endpoints for creating, reading, updating, and deleting contacts.
- **Database**: MongoDB is used to store the contact details. Each contact record includes fields for first name, last name, email, phone number, company, and job title.

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account for remote database access or MongoDB installed locally
- Git

### Installation

1. Clone the repository:

    ```bash
   git clone https://github.com/prathamKumarshetty/ERINO-Contact-management-system.git
   cd ERINO-Contact-management-system
2. Install dependencies for both frontend:
   ## Backend dependencies
   ```bash
   cd backend
   npm install
3. Install dependencies for backend:
     ```bash
    cd ../frontend
    npm install
3. Set up MongoDB connection:
   ## Create a .env file in the backend directory with the following variables:
   ### In my project username is "prathamsss" and password for my mongoDB is "Pratham" , 
   ### customize the username and password with respect to your mongoDB atlat.
    ```bash
    MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/?retryWrites=true&w=majority
    PORT=5001
<img width="800" alt="Screenshot 2024-11-16 at 11 41 38 AM" src="https://github.com/user-attachments/assets/a2412537-e785-4ab9-95b8-b91df013e636">

    
5. Run the backend server:
     ```bash
    cd ../backend
    npm start
     
6. Run the frontend development server:
     ```bash
    cd ../frontend
    npm start
7. Access the application in your browser at http://localhost:3000.

# Problems Faced
  1) Choosing between RDBMS (PostgreSQL) and NoSQL (MongoDB) was initially confusing. However, MongoDB was chosen due to its simplicity, flexibility, and because it’s schema-less, 
     which is ideal for a Contact Management System that only requires a single collection with no relational dependencies.
  2) Encountered several technical errors while trying to deploy on Render.com, which prevented successful deployment.
  3) Selecting the color scheme for the website was challenging and required multiple adjustments to get the UI just right.
  4) Learning and applying React Material UI (MUI) for the first time, so I watched a one-shot video on MUI to understand its core concepts.
  
     

    
  












