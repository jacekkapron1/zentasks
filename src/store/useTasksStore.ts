import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from '../types/models';

interface TasksState {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    removeTask: (id: string) => void;
    setTasks: (task: Task[]) => void;
}

export const useTasksStore = create<TasksState>()(
    persist(
        (set) => ({
            tasks: [],
            
            addTask: (task) =>
                set((state) => ({
                    tasks: [...state.tasks, task],
                })),
            
            updateTask: (id, updates) =>
                set((state) => ({
                    tasks: state.tasks.map((t) =>
                        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
                    ),
                })),
            
            removeTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((t) => t.id !== id),
                })),
            
            setTasks: (tasks) => set({ tasks }),
        }),
        {
            name: 'task-storage',
        }
    )   
)