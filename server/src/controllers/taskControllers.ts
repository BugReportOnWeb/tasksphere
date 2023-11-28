import { Request, Response } from 'express';
import Task from '../models/task';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';

let tasks: Task[] = [];

const getAllTasks = (req: Request, res: Response) => {
    const email = req.email;
    const userTasks = tasks.filter(task => task.userEmail === email);

    res.send(userTasks);
}

const getSpecificTask = (req: Request, res: Response) => {
    const email = req.email;
    const { id } = req.params;
    const task = tasks.find(task => task.id === id && task.userEmail === email);

    if (!task) {
        const error = "Task not found. Invalid task id";
        return res.status(404).send({ error });
    }

    res.send(task);
}

const addTask = (req: Request, res: Response) => {
    // CHECK: use of 'non-null assertion operator'
    const email = req.email!;
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
        // CHEKC: Fix value of completed
        // Either have it opt out from validation rules
        // Or have a dynamic value for the completed field
        completed: false,
        userEmail: email
    }

    tasks.push(newTask)

    res.send(newTask);
}

const deleteTask = (req: Request, res: Response) => {
    const email = req.email;
    const { id } = req.params;
    const deletedTask = tasks.find(task => task.id === id && task.userEmail === email);

    if (!deletedTask) {
        const error = "Task not found. Invalid task id";
        return res.status(404).send({ error });
    }

    const deleteTaskIndex = tasks.indexOf(deletedTask);
    tasks.splice(deleteTaskIndex, 1);

    res.send(deletedTask);
}

const updateTask = (req: Request, res: Response) => {
    const email = req.email;
    const { id } = req.params;
    const updatedTask = tasks.find(task => task.id === id && task.userEmail === email);

    if (!updatedTask) {
        const error = "Task not found. Invalid task id";
        return res.status(404).send({ error });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ erorr: errors.array() });
    }

    updatedTask.title = req.body.title || updatedTask.title;
    updatedTask.description = req.body.description || updatedTask.description;
    updatedTask.completed = req.body.completed;

    // XOR -------------- ((need vs get)need vs get)
    // 0 (req) 0 (original) -> 0 | 0 
    // 0 (req) 1 (original) -> 0 | 1
    // 1 (req) 0 (original) -> 1 | 1
    // 1 (req) 1 (original) -> 1 | 0

    res.send(updatedTask);
}

export {
    getAllTasks,
    getSpecificTask,
    addTask,
    deleteTask,
    updateTask
}
