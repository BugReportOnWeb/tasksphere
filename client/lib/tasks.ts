import { Task, UpdateTaskReq } from "@/types/Task";

const token = process.env.TEMP_TOKEN;

const getTasks = async (): Promise<Task[] | undefined> => {
    try {
        const res = await fetch('http://localhost:4000/api/tasks', {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch (retrieve all tasks) data')
        }

        return res.json();
    } catch (error) {
        // TODO: something with error
        console.error(error);
    }
}

const updateTask = async (newTask: Task): Promise<Task | undefined> => {
    const updatedTask: UpdateTaskReq = { 
        title: newTask.title,
        description: newTask.description,
        completed: newTask.completed
    }

    try {
        const res = await fetch(`http://localhost:4000/api/tasks/${newTask.id}`, {
            method: "PUT",
            headers: { 
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify(updatedTask),
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch (update task) data')
        }

        return res.json();
    } catch (error) {
        // TODO: something with error
        console.error(error);
    }
}

const removeTask = async (taskId: string): Promise<Task | undefined> => {
    try {
        const res = await fetch(`http://localhost:4000/api/tasks/${taskId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` },
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch (delete task) data')
        }

        return res.json();
    } catch (error) {
        // TODO: something with error
        console.error(error);
    }
}

export {
    getTasks,
    removeTask,
    updateTask,
};
