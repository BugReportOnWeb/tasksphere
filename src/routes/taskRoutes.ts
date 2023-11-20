import express from 'express';
import {
    getAllTasks,
    getSpecificTask,
    addTask,
    deleteTask,
    updateTask
} from '../controllers/taskControllers';

const router = express();

router.get('/', getAllTasks);
router.get('/:id', getSpecificTask);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export { router as taskRoutes };
