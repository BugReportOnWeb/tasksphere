import { Request, Response } from 'express';
import Task from '../models/task';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';

let tasks: Task[] = [];

const getAllTasks = (_req: Request, res: Response) => {
    res.send(tasks);
}

const getSpecificTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === id);

    if (!task) {
        const error = "Task not found, Inavlid task id";
        return res.status(404).send({ error });
    }

    res.send(task);
}

const addTask = (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }

    const { title, description } = req.body;
    const newId = uuidv4();

    const newTask: Task = {
        id: newId,
        title,
        description,
        completed: false
    }

    tasks.push(newTask)

    res.send(newTask);
}

const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedTask = tasks.find(task => task.id === id);

    if (!deletedTask) {
        const error = "Task not found, Inavlid task id";
        return res.status(404).send({ error });
    }

    const deleteTaskIndex = tasks.indexOf(deletedTask);
    tasks.splice(deleteTaskIndex, 1);

    res.send(deletedTask);
}

const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedTask = tasks.find(task => task.id === id);

    if (!updatedTask) {
        const error = "Task not found, Inavlid task id";
        return res.status(404).send({ error });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ erorr: errors.array() });
    }

    updatedTask.title = req.body.title || updatedTask.title;
    updatedTask.description = req.body.description || updatedTask.description;
    updatedTask.completed = req.body.completed || updatedTask.completed;

    res.send(updatedTask);
}

export {
    getAllTasks,
    getSpecificTask,
    addTask,
    deleteTask,
    updateTask
}
