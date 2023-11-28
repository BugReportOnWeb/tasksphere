interface Task {
    id: string
    title: string
    description: string
    completed: boolean
    userEmail: string
}

interface UpdateTaskReq extends Omit<Task , "id" | "userEmail"> {}

export type { Task, UpdateTaskReq };
