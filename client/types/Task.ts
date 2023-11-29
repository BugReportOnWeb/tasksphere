import { Dispatch, SetStateAction } from "react"

interface Task {
    __v: number;
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    userEmail: string;
}

interface UpdateTaskReq extends Omit<Task , "__v" | "_id" | "userEmail"> {}

interface TaskContextType {
    tasks: Task[] | null;
    setTasks: Dispatch<SetStateAction<Task[] | null>>;
}

export type { Task, UpdateTaskReq, TaskContextType };
