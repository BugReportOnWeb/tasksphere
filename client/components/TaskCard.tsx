import { Task } from "@/types/Task"
import Button from "./Button";

interface TaskCardProps {
    task: Task;
    updateTask: () => void;
    removeTask: () => void;
}

const TaskCard = ({ task, updateTask, removeTask }: TaskCardProps) => {
    return (
        <div className='flex justify-between items-start border border-[#27272a] p-6 rounded-md'>
            <div className='flex flex-col space-y-1.5'>
                <h1 className='text-2xl font-bold'>{task.title}</h1>
                <h1 className='text-[#a1a1aa] text-sm'>{task.description}</h1>
                <h1 className={`${task.completed ? 'text-green-500' : 'text-red-500'} text-sm`}>
                    {task.completed ? 'Completed' : 'Not Completed'}
                </h1>
            </div>
            <div className='flex flex-col gap-3'>
                {!task.completed && <Button onClick={updateTask} color="green">Done {'->'}</Button>}
                {task.completed && <Button onClick={updateTask} color="blue">{'<-'} Revert</Button>}
                <Button onClick={removeTask} color="red">Delete</Button>
            </div>
        </div>
    )
}

export default TaskCard;
