# TaskSphere 

## Overview
This project features a TypeScript and Express backend API integrated with a Next.js 14 based client interface. It enables user-specific task management, incorporating user authentication and authorization for CRUD operations on tasks.

## Features
- **User Authentication & Authorization:**
  - Authenticate and authorize users for accessing and managing tasks securely.
- **CRUD Operations:**
  - Create, Read, Update, and Delete tasks associated with individual authenticated users.

## Installation
1. Clone this repository to your local machine:
```bash
git clone https://github.com/BugReportOnWeb/ts-express-task.git
cd ts-express-task
```

2. Navigate to the `client/` directory:
```bash
cd client/
```

3. Install client dependencies:
```bash
npm install
```

4. Navigate to the `server/` directory:
```bash
cd ../server/
```

5. Install server dependencies:
```bash
npm install
```

6. Create a `.env` file in the `server/` directory and add the following variables:
```dotenv
PORT=3000
JWT_SECRET=your_secret_key_here
MONGO_URI=your_mongodb_uri_here
```

## Usage
1. Start the server:
```bash
cd server/
npm run dev
```

2. Start the client:
```bash
cd ../client/
npm run dev
```

3. Access the Next.js 14-based client interface at http://localhost:3000.

4. Ensure your MongoDB server is running and accessible with the provided URI in the .env file.

## API Endpoints
- **User Authentication:**
    - POST /api/users/register: Register a new user.
    - POST /api/users/login: Log in and authenticate a user.
- **Task Management:**
    - GET /api/tasks: Retrieve tasks for the authenticated user.
    - GET /api/tasks/:id: Retrieve details of a specific task for the authenticated user.
    - POST /api/tasks: Create a new task for the authenticated user.
    - PUT /api/tasks/:id: Update an existing task belonging to the authenticated user.
    - DELETE /api/tasks/:id: Delete a task specific to the authenticated user.

## Technologies Used
- TypeScript
- Express
- Node.js
- Next.js 14 (for the client interface)
- JSON Web Tokens (JWT) for authentication

## Contribution
Contributions to enhance the functionality or improve the codebase are welcome! Feel free to open issues or pull requests.
