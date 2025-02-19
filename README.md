# Attractive React Project with Authentication and Dashboard Visualization

## Overview

This project is a full-stack web application built with React, TypeScript, and Node.js. It demonstrates a modern, attractive, and dynamic user interface that includes the following features:

- **Counter Component:**  
  A counter with increment, decrement, and reset functionalities. It features a dynamic background fill animation using React Spring that changes based on the counter value.

- **User Data Form:**  
  A stylish form that collects user information (name, address, email, phone). It auto-generates a user ID on submission, warns about unsaved changes, and persists data using localStorage (or Redux Toolkit).

- **Rich Text Editor:**  
  An editor powered by React Quill that enables rich formatting (bold, italic, underline, lists) and persists user data.

- **Dashboard Visualization:**  
  A dashboard that displays user profile details, a counter, and user activity trends via charts (React Chartjs-2) with smooth animations.

- **User Authentication:**  
  Login and Signup pages with mock authentication. The backend uses Node.js, Express, and SQLite to validate credentials and manage user data.

## Technology Stack

- **Frontend:**
  - React & TypeScript
  - Material UI
  - React Router
  - Redux Toolkit (optional)
  - React Spring (for animations)
  - React Chartjs-2 (for charts)
  - React Quill (rich text editor)

- **Backend:**
  - Node.js & Express
  - SQLite (database)
  - body-parser, cors

## Project Structure

1. **Clone the repository:**
```bash git clone <repository-url>
cd react-project

2)Install dependencies:
npm install

3)Start the development server:
npm start
