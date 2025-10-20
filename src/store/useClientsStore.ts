import { create } from 'zustand';
import { persist } from "zustand/middleware";
import type { Client } from '../types/models';

interface ClientsState {
    clients: Client[];
    addClient: (client: Client) => void;
    updateClient: (id: string, updates: Partial<Client>) => void;
    removeClient: (id: string) => void;
    setClients: (clients: Client[]) => void;
}

export const useClientsStore = create<ClientsState>()(
    persist(
        (set) => ({
            clients: [],
            
            addClient: (client) => 
                set((state) => ({
                    clients: [...state.clients, client],
                })),
            
            updateClient: (id, updates) => 
                set((state) => ({
                    clients: state.clients.map((c) =>
                        c.id === id ? { ...c, ...updates } : c
                    ),
                })),
            
            removeClient: (id) => 
                set((state) => ({
                    clients: state.clients.filter((c) => c.id !== id),
                })),
            
            setClients: (clients) => set({ clients }),
        }),
        {
        name: 'clients-storage',
        }
    )
)