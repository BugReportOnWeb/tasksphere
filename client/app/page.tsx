'use client'

import TaskCard from "@/components/TaskCard";
import { Task } from "@/types/Task";
import { getTasks, removeTask, updateTask } from "@/lib/tasks";
import { useEffect, useState } from "react";

const App = () => {
    const currentUser = 'Dev';
    const [tasks, setTasks] = useState<Task[] | null>(null);

    // TODO: CHange to some util using context for tasks and setter function
    const handleRemoveTask = async (taskId: string) => {
        // Optimistic UI
        // TODO: Do with state for actual Optimistic UI
        setTasks(prevTasks => {
            if (prevTasks) {
                return prevTasks.filter(task => task.id !== taskId);
            } else {
                return prevTasks;
            }
        })

        // Actual action
        const removedTask = await removeTask(taskId);
        console.log(removedTask);
    }

    const handleUpdateTask = async (taskId: string) => {
        // // Optimistic UI
        // // TODO: Do with state for actual Optimistic UI
        // // CHECK: Use of not null operator
        let newUpdatedTask = tasks!.find(task => task.id === taskId);
        if (newUpdatedTask) newUpdatedTask = { ...newUpdatedTask, completed: !newUpdatedTask.completed };
        const filteredTasks = tasks!.filter(task => task.id !== taskId);

        setTasks(prevTasks => {
            if (prevTasks) {
                if (newUpdatedTask) {
                    return [...filteredTasks, newUpdatedTask]
                } else { return prevTasks;
                }
            } else {
                return prevTasks;
            }
        })

        // Actual action
        if (newUpdatedTask) {
            const completedTask = await updateTask(newUpdatedTask);
            console.log(completedTask);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const tempTasks = await getTasks();
            if (tempTasks) setTasks(tempTasks);
        }

        fetchData();
    }, [])



    return (
        <div className='my-40'>
            <h1 className='text-5xl font-extrabold mb-10'>{currentUser}'s Data</h1>
            {/* CHECK: Using 'not null operator' intead of '&&' */}
            <div className='flex justify-between gap-10'>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-extralight text-sm'>Uncompleted Tasks</h1>
                        <div className='w-10 border border-gray-500'></div>
                    </div>

                    {
                        // Check array of uncompleted tasks
                        tasks
                            ?.filter(task => !task.completed)
                            .length === 0 && <h1 className='text-[#a1a1aa]'>No tasks!</h1>
                    }

                    {tasks?.map(task => (
                        !task.completed && <TaskCard
                            updateTask={() => handleUpdateTask(task.id)}
                            removeTask={() => handleRemoveTask(task.id)}
                            key={task.id}
                            task={task}
                        />
                    ))}
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-extralight text-sm'>Completed Tasks</h1>
                        <div className='w-10 border border-gray-500'></div>
                    </div>

                    {
                        // Check array of completed tasks
                        tasks
                            ?.filter(task => task.completed)
                            .length === 0 && (<h1 className='text-[#a1a1aa]'>No tasks!</h1>)
                    }

                    {tasks?.map(task => (
                        task.completed && <TaskCard
                            updateTask={() => handleUpdateTask(task.id)}
                            removeTask={() => handleRemoveTask(task.id)}
                            key={task.id}
                            task={task}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default App;
