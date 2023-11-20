import express from 'express';
import * as dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`)
})
