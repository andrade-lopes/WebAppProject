# Overview

As a software engineer, I am expanding my understanding of web application development and cloud-based data management. This project was created to demonstrate how a server-side web application can dynamically generate web pages, process user input, and communicate with a cloud database.

The software is a web application called WebAppProject. It uses Node.js, Express, EJS, and Google Firebase Firestore to manage volunteer projects. Users can create, view, edit, and delete volunteer projects through a web interface.

The application demonstrates dynamic web pages generated on the server, form processing, routing, and full CRUD operations with a cloud database.

My purpose for creating this software was to gain practical experience with server-side web development, understand how Express handles HTTP requests and responses, and learn how a web application can communicate with a cloud database.

[Software Demo Video](VIDEO_LINK_TO_BE_ADDED)

# Web Application

This project uses Node.js with the Express framework and EJS templates to generate dynamic web pages.

The application contains multiple dynamically generated pages, including:

* Home page displaying the available volunteer projects.
* Project details page displaying information for a selected project.
* Create Project page containing a form for user input.
* Edit Project page allowing users to modify an existing project.

The application is interactive because users can enter project information through forms. The submitted information is processed by the Express server and stored in Firestore.

The application supports the following operations:

* Create a new volunteer project.
* Read and display volunteer projects.
* Update an existing volunteer project.
* Delete a volunteer project.

# Cloud Database

This project uses Google Firebase Firestore as the cloud database.

Project information is stored as documents in a Firestore collection named `projects`.

Each project can contain:

* Project name
* Description
* Location
* Creation date
* Updated date

The Express server communicates with Firestore using the Firebase Admin SDK.

# Development Environment

The following tools and technologies were used to develop this software:

* Visual Studio Code
* Node.js
* Express
* EJS
* JavaScript
* Firebase Firestore
* Firebase Admin SDK
* HTML5
* CSS
* Git
* GitHub
* Local Node.js development server

The application was developed using JavaScript and uses ES modules. Express handles HTTP routing and form processing, while EJS dynamically generates HTML pages using data retrieved from Firestore.

# Useful Websites

* Firebase Documentation
* Express Documentation
* EJS Documentation
* MDN Web Docs
* Node.js Documentation

# Future Work

* Add Firebase Authentication and user accounts.
* Add project categories and filtering.
* Add volunteer registration for individual projects.
* Add project status and completion dates.
* Improve form validation and error messages.
* Add responsive design for mobile devices.
* Deploy the application using a cloud hosting service.
