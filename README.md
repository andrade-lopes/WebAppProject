# WebAppProject

## Overview

As a software engineer, I am expanding my understanding of web application development and cloud-based data management. This project was created to demonstrate how a server-side web application can dynamically generate web pages, process user input, and communicate with a cloud database.

The software is a web application called **WebAppProject**. It uses **Node.js, Express, EJS, and Google Firebase Firestore** to manage volunteer projects. Users can create, view, edit, and delete volunteer projects through a web interface.

The application demonstrates server-side page rendering, HTTP routing, form processing, user input handling, and full CRUD operations with a cloud database.

My purpose for creating this software was to gain practical experience with server-side web development, understand how Express handles HTTP requests and responses, and learn how a web application can communicate with and manage data stored in a cloud database.

## Software Demo Video

[Watch the Software Demo Video](https://youtu.be/ztRj2q3SV-8)

The demonstration video shows the main functionality of the application, including the volunteer project interface and interaction with the cloud database.

# Web Application

This project uses **Node.js** with the **Express** framework and **EJS** templates to generate dynamic web pages.

The application includes the following pages:

- **Home page** — Displays the available volunteer projects.
- **Project details page** — Displays information about a selected project.
- **Create Project page** — Provides a form for creating a new volunteer project.
- **Edit Project page** — Allows users to modify an existing project.

The application is interactive because users can enter project information through web forms. The submitted information is processed by the Express server and stored in Firebase Firestore.

The application supports the following CRUD operations:

- **Create** — Create a new volunteer project.
- **Read** — Retrieve and display volunteer projects.
- **Update** — Modify an existing volunteer project.
- **Delete** — Remove a volunteer project.

# Cloud Database

This project uses **Google Firebase Firestore** as its cloud database.

Project information is stored as documents in a Firestore collection named `projects`.

A project can contain information such as:

- Project name
- Description
- Location
- Creation date

The Express server communicates with Firestore using the **Firebase Admin SDK**.

The database connection was tested using the `test-firebase.js` script. The test successfully retrieved the stored projects from Firestore, confirming that the application can communicate with the cloud database.

# Development Environment

The following tools and technologies were used to develop this software:

- Visual Studio Code
- Node.js
- Express
- EJS
- JavaScript
- Firebase Firestore
- Firebase Admin SDK
- HTML5
- CSS
- Git
- GitHub
- Local Node.js development server

The application was developed using JavaScript and ES modules. Express handles HTTP routing, requests, and form processing, while EJS dynamically generates HTML pages using data retrieved from Firestore.

# Project Structure

The main project structure includes:

```text
WebAppProject/
├── config/
│   ├── firebase-admin.js
│   └── firebase.js
├── public/
│   └── css/
├── routes/
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── project.ejs
├── server.js
├── test-firebase.js
├── package.json
└── package-lock.json
```

The server.js file is responsible for starting the Express server and handling the main application configuration.

The views directory contains the EJS templates used to dynamically generate the application's pages.

The config directory contains the Firebase configuration files.

The routes directory contains the application's route definitions.

# How to Run
To run the application locally, first install the project dependencies:
```bash
npm install
```

Then start the Express server:
```bash
npm start
```

The server will start on:
http://localhost:3000
Open the address in a web browser to use the application.

# Testing

The Firebase connection can be tested using:
node test-firebase.js

The test retrieves the projects stored in the Firestore projects collection and displays their information in the terminal.

The application was also manually tested through the web interface.

The following operations were successfully verified:

Creating a volunteer project
Displaying projects from Firestore
Viewing an individual project
Editing a project
Deleting a project
Confirming database changes directly through Firebase

# Git and GitHub

Git was used for version control throughout the development of the project.

The project source code is stored in a GitHub repository named WebAppProject.

The repository is maintained using the main branch.

Useful Websites
Firebase Documentation
Firebase Admin SDK Documentation
Express Documentation
EJS Documentation
Node.js Documentation
MDN Web Docs
Future Work

Possible improvements for future versions of the application include:

Add Firebase Authentication and user accounts.
Add project categories and filtering.
Add volunteer registration for individual projects.
Add project status and completion dates.
Improve form validation and error messages.
Add responsive design for mobile devices.
Add additional security features.
Deploy the application using a cloud hosting service.

# Conclusion

This project provided practical experience with server-side web development, Express routing, EJS templates, form processing, and cloud database integration.

Building the application helped me understand how a web server communicates with a cloud database and how CRUD operations can be implemented in a real-world web application.

The completed project demonstrates the ability to create a functional server-side application that connects a web interface with a cloud database and manages persistent data through a complete CRUD workflow.