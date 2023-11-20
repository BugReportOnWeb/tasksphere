import { Request, Response } from 'express';
import Task from '../models/task';

let tasks: Task[] = [];

const getAllTasks = (_req: Request, res: Response) => {
    res.send(tasks);
}

const getSpecificTask = (req: Request, res: Response) => {
    const { id } = req.params;

    const task = tasks.find(task => task.id === parseInt(id));

    if (task) {
        res.send(task);
    } else {
        res.status(404).send({ error: 'Task not found. Invalid task id' })
    }
}

const addTask = (req: Request, res: Response) => {
    const { title, description } = req.body;

    const newTask: Task = {
        // TODO: Fix 'id' bug (use uuid)
        id: tasks.length + 1,
        title,
        description,
        completed: false
    }

    tasks.push(newTask)

    res.send(newTask);
}

const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;

    const deletedTask = tasks.find(task => task.id === parseInt(id));

    if (deletedTask) {
        const deleteTaskIndex = tasks.indexOf(deletedTask);
        tasks.splice(deleteTaskIndex, 1);

        res.send(deletedTask);
    } else {
        res.status(404).send({ error: 'Task not found. Invalid task id' });
    }
}

const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;

    const updatedTask = tasks.find(task => task.id === parseInt(id));

    if (updatedTask) {
        updatedTask.title = req.body.title || updatedTask.title;
        updatedTask.description = req.body.description || updatedTask.description;
        updatedTask.completed = req.body.completed || updatedTask.completed;

        res.send(updatedTask);
    } else {
        res.status(404).send({ error: 'Task not found. Invalid task id' });
    }
}

export {
    getAllTasks,
    getSpecificTask,
    addTask,
    deleteTask,
    updateTask
}
