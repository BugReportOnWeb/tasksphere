import express from 'express';
import { taskRoutes } from './routes/taskRoutes';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`)
})
