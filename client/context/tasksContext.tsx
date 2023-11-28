import { TaskContextType } from "@/types/Task";
import { createContext } from "react";

const TaskContext = createContext<TaskContextType | null>(null);

export { TaskContext };
