# TypeScript Express Task Manager

## Overview
This project is a backend API developed using TypeScript and Express, featuring user-specific task management. It incorporates user authentication and authorization mechanisms to provide CRUD (Create, Read, Update, Delete) operations for tasks associated with individual users. The main goal is to showcase TypeScript integration with Express/Node while implementing user-centric task functionalities.

## Features
- **User Authentication:** Authenticate users to access their specific tasks.
- **Authorization:** Ensure authorized access to tasks based on user credentials.
- **Create:** Add new tasks associated with authenticated users.
- **Read:** Retrieve a list of tasks or get specific task details for the authenticated user.
- **Update:** Modify existing tasks belonging to the authenticated user.
- **Delete:** Remove tasks specific to the authenticated user.

## Installation
1. Clone this repository to your local machine.
```bash
git clone https://github.com/BugReportOnWeb/ts-express-task.git
``````

2. Navigate to the project directory.
```bash
cd ts-express-task
```

3. Install dependencies using npm or yarn.
```bash
npm install
# or
yarn install
```

## Usage
1. Create a `.env` file in the root directory of the project.

2. Add the following variables to the `.env` file:
```dotenv
PORT=3000
JWT_SECRET=your_secret_key_here
```

Update the `PORT` variable to specify the desired port number for the server.

3. Start the server.
```bash
npm run dev
```
*Note*: To properly authenticate requests to task-related endpoints, users need to include the received JWT token in the Authorization header as a Bearer Token.
```makefile
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```
Once authorized, users can perform CRUD operations on tasks associated with their account using API endpoints.

## API Endpoints
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in and authenticate a user.
- **GET /api/tasks**: Retrieve tasks for the authenticated user.
- **GET /api/tasks/:id**: Retrieve details of a specific task for the authenticated user.
- **POST /api/tasks**: Create a new task for the authenticated user.
- **PUT /api/tasks/:id**: Update an existing task belonging to the authenticated user.
- **DELETE /api/tasks/:id**: Delete a task specific to the authenticated user.

## Technologies Used
- TypeScript
- Express
- Node.js
- JSON Web Tokens (JWT) for authentication

## Contribution
Contributions to enhance the functionality or improve the codebase are welcome! Feel free to open issues or pull requests.
