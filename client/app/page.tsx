'use client'

import { useContext, useEffect } from "react";
import { TaskContext } from "@/context/TaskContext";
import { TaskContextType } from "@/types/Task";
import { sampleTask } from "@/lib/constants";
import { addTask, getTasks } from "@/lib/tasks";
import Button from "@/components/Button";
import Tasks from "@/components/Tasks";

const App = () => {
    // TODO: Change to dynamic when using login res from localStorage
    const currentUser = 'Dev';
    const currentUserEmail = 'testing@testing.com';

    const { setTasks } = useContext(TaskContext) as TaskContextType;

    const handleAddTask = async () => {
        // Optimistic UI
        const randomId = Math.floor(Math.random() * 1000).toString();
        setTasks(prevTasks => {
            return [...prevTasks!, {
                ...sampleTask,
                __v: 0,
                _id: randomId,
                userEmail: currentUserEmail
            }];
        })

        // Actual action
        const addedTask = await addTask(sampleTask);
        console.log(addedTask);

        // Change in from optimistic tasks
        // Update to new server received value (id, userEmail)
        setTasks(prevTasks => (
            prevTasks!.map(task => (
                task._id === randomId
                    ? addedTask
                    : task
            ))
        ))
    }

    useEffect(() => {
        const fetchTask = async () => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        }

        fetchTask();
    }, [])

    return (
        <div className='my-40'>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-5xl font-extrabold'>{currentUser}'s Data</h1>
                <Button onClick={handleAddTask} className='bg-white text-[#27272a] hover:bg-white/90'>Add Task</Button>
            </div>
            <div className='flex justify-between gap-10'>
                <Tasks completed={false} />
                <Tasks completed={true} />
            </div>
        </div>
    )
}

export default App;
