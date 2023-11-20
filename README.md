# TypeScript Express Task Manager

## Overview
This project is a simple backend API developed using TypeScript and Express. It provides CRUD (Create, Read, Update, Delete) operations for managing tasks stored in a local array. The primary aim of this project is to demonstrate the integration of TypeScript with Express/Node while implementing basic task management functionalities.

## Features
- **Create:** Add new tasks to the local array.
- **Read:** Retrieve a list of tasks or get specific task details.
- **Update:** Modify existing tasks in the array.
- **Delete:** Remove tasks from the array.

## Installation
1. Clone this repository to your local machine.
```bash
git clone https://github.com/BugReportOnWeb/ts-express-task.git
``````

2. Navigate to the project directory.
```bash
cd ts-express-task.git
```

3. Install dependencies using npm or yarn.
```bash
npm install
# or
yarn install
```

## Installation
1. Start the server.
```bash
npm run dev
```

2. Once the server is running, you can perform CRUD operations on tasks using API endpoints (e.g., `/tasks`, `/tasks/:id`).

## API Endpoints
- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve details of a specific task.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task.
- **DELETE /tasks/:id**: Delete a task.

## Technologies Used
- TypeScript
- Express
- Node.js
