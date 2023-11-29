import { Task, UpdateTaskReq } from "@/types/Task";

const token = process.env.NEXT_PUBLIC_TEMP_TOKEN as string;

const getTasks = async (): Promise<Task[]> => {
    try {
        const res = await fetch('http://localhost:4000/api/tasks', {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
            cache: 'no-store'
        })

        // CHECK: Check of either 'throw <error>' OR 'throw new Error(<error>)'
        const data = await res.json();
        if (!res.ok) throw data.error;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const updateTask = async (newTask: Task): Promise<Task> => {
    const updatedTask: UpdateTaskReq = {
        title: newTask.title,
        description: newTask.description,
        completed: newTask.completed
    }

    try {
        const res = await fetch(`http://localhost:4000/api/tasks/${newTask._id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask),
            cache: 'no-store'
        })

        const data = await res.json();
        if (!res.ok) throw data.error;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const removeTask = async (taskId: string): Promise<Task> => {
    try {
        const res = await fetch(`http://localhost:4000/api/tasks/${taskId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` },
            cache: 'no-store'
        })
        
        const data = await res.json();
        if (!res.ok) throw data.error;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const addTask = async (newTask: UpdateTaskReq): Promise<Task> => {
    try {
        const res = await fetch(`http://localhost:4000/api/tasks`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask),
            cache: 'no-store'
        })

        const data = await res.json();
        if (!res.ok) throw data.error;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {
    getTasks,
    removeTask,
    updateTask,
    addTask
};
