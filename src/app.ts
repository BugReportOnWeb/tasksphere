import express from 'express';
import * as dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes';
import logging from './middleware/logging';
import serverError from './middleware/serverError';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use(logging);

// Routes
app.use('/tasks', taskRoutes);

// Uncatched error handling
app.use(serverError);

app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`)
})
