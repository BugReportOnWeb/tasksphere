import { Dispatch, SetStateAction } from "react"

interface Task {
    id: string
    title: string
    description: string
    completed: boolean
    userEmail: string
}

interface UpdateTaskReq extends Omit<Task , "id" | "userEmail"> {}

interface TaskContextType {
    tasks: Task[] | null;
    setTasks: Dispatch<SetStateAction<Task[] | null>>;
}

export type { Task, UpdateTaskReq, TaskContextType };
