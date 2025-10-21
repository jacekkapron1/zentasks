import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Status } from "../types/models";

interface StatusesState {
    statuses: Status[];
    addStatus: (status: Status) => void;
    updateStatus: (id: string, updates: Partial<Status>) => void;
    removeStatus: (id: string) => void;
    setStatuses: (statuses: Status[]) => void;
}

export const useStatusesStore = create<StatusesState>()(
    persist(
        (set) => ({
            statuses: [
                { id: 'todo', label: 'Do zrobienia', color: '#d97706', order: 1 },
                { id: 'in-progress', label: 'W toku', color: '#2563eb', order: 2 },
                { id: 'done', label: 'Zakończone', color: '#16a34a', order: 3 },
            ],

            addStatus: (status) => 
                set((state) => ({
                    statuses: [...state.statuses, status],
                })),
            
            updateStatus: (id, updates) => 
                set((state) => ({
                    statuses: state.statuses.map((s) =>
                        s.id === id ? { ...s, ...updates } : s
                    ),
                })),
            
            removeStatus: (id) =>
                set((state) => ({
                    statuses: state.statuses.filter((s) => s.id !== id),
                })),  
            
            setStatuses: (statuses) => set({ statuses }),                
        }),
        { name: 'statuses-storage' }
    )
)