'use client'

import { useEffect, useState } from "react";
import { TaskContext } from "@/context/tasksContext";
import {  Task } from "@/types/Task";
import { getTasks } from "@/lib/tasks";
import Tasks from "@/components/Tasks";

const App = () => {
    const currentUser = 'Dev';
    const [tasks, setTasks] = useState<Task[] | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        }

        fetchTask();
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            <div className='my-40'>
                <h1 className='text-5xl font-extrabold mb-10'>{currentUser}'s Data</h1>
                {/* CHECK: Using 'not null operator' intead of '&&' */}
                <div className='flex justify-between gap-10'>
                    <Tasks completed={false} />
                    <Tasks completed={true} />
                </div>
            </div>
        </TaskContext.Provider>
    )
}

export default App;
