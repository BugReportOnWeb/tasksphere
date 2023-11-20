import express from 'express';
import {
    addNewtask,
    deleteTask,
    getAllTasks,
    updateTask
} from '../controllers/taskControllers';

const router = express();

router.get('/', getAllTasks);
router.post('/', addNewtask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export { router as taskRoutes };
