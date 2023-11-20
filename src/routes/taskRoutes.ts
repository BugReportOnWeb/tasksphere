import express from 'express';
import {
    addNewTask,
    deleteTask,
    getAllTasks,
    updateTask
} from '../controllers/taskControllers';

const router = express();

router.get('/', getAllTasks);
router.post('/', addNewTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export { router as taskRoutes };
