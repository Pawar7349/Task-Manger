# Task Manager

A comprehensive task management application built with React, Redux, Node.js, and MongoDB.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
Task Manager is a comprehensive task management application designed to help users efficiently manage their tasks. It includes features like user authentication, task creation, editing, deletion, and status management. The application is built with a modern stack, including React, Redux, Node.js, and MongoDB.

## Features
- User authentication (signup, login)
- Add, edit, delete tasks
- Task status management (backlog, in progress, done)
- Responsive design
- Notifications for task updates

## Technologies Used
### Frontend:
- React
- Redux Toolkit
- React Router
- SCSS

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose

### Other Tools:
- Axios
- React Icons
- React Toastify

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/Pawar7349/Task-Manger.git
    ```

2. Navigate to the server directory:
    ```sh
    cd Task-Manger/server
    ```

3. Install backend dependencies:
    ```sh
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the server directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup
1. Navigate to the client directory:
    ```sh
    cd ../client
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Register a new account or log in with an existing account.
3. Add, edit, and manage your tasks through the intuitive UI.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```sh
    git commit -m "Description of changes"
    ```
5. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
Pratik Pawar - pawarpratik7349@gmail.com

GitHub Repository: [https://github.com/Pawar7349/Task-Manger](https://github.com/Pawar7349/Task-Manger)
