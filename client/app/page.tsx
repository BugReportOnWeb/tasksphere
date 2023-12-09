'use client'

import { useContext, useEffect } from "react";
import { TaskContext } from "@/context/TaskContext";
import { TaskContextType } from "@/types/task";
import { sampleTask } from "@/lib/constants";
import { addTask, getTasks } from "@/lib/tasks";
import Button from "@/components/Button";
import Tasks from "@/components/Tasks";
import { redirect } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType, AuthUser } from "@/types/auth";

const App = () => {
    // TODO: Change to dynamic when using login res from localStorage
    // const [currentUser, setCurrentUser] = useState<User | null>(null);
    // const currentUserEmail = 'testing@testing.com';

    const { currentAuthUser, setCurrentAuthUser } = useContext(AuthContext) as AuthContextType;
    const { setTasks } = useContext(TaskContext) as TaskContextType;

    const handleAddTask = async () => {
        // Optimistic UI
        const randomId = Math.floor(Math.random() * 1000).toString();
        setTasks(prevTasks => {
            return [...prevTasks!, {
                ...sampleTask,
                __v: 0,
                _id: randomId,
                // CHECK: User of 'not null' operator here
                userEmail: currentAuthUser?.email!
            }];
        })

        // Actual action
        if (currentAuthUser) {
            const addedTask = await addTask(
                sampleTask,
                currentAuthUser?.token
            );

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
    }

    useEffect(() => {
        const fetchTask = async (currentUser: AuthUser) => {
            const fetchedTasks = await getTasks(currentUser.token);
            setTasks(fetchedTasks);
        }

        if (localStorage.getItem('user')) {
            // TODO: Fix all these naming confusion
            // Between 'currentUser' and 'currentAuthUser'
            const currentUser: AuthUser = JSON.parse(localStorage.getItem('user')!);

            setCurrentAuthUser(currentUser);
            fetchTask(currentUser);
        } else {
            redirect('/login');
        }

    }, [])

    return (
        <div className='pt-[10.5rem] pb-20'>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-5xl font-extrabold'>{currentAuthUser?.username}'s Data</h1>
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
