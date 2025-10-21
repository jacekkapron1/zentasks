import { useTasksStore } from "../store/useTasksStore";
import { useClientsStore } from "../store/useClientsStore";
import { useStatusesStore } from "../store/useStatusesStore";

export default function DashboardPage() {
    const { tasks } = useTasksStore();
    const { clients } = useClientsStore();
    const { statuses } = useStatusesStore();

    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((t) => t.statusId === 'done').length;
    const inProgressTasks = tasks.filter((t) => t.statusId === 'in-progress').length;
    const todoTasks = tasks.filter((t) => t.statusId === 'todo').length;
    const totalClients = clients.length;
    const completionRate = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

    return (
        <section>
            <h1>Dashboard</h1>
            <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
            }}>
                <div>
                    <h3>Wszystkie zadania</h3>
                    <p>{totalTasks}</p>
                </div>
                <div>
                    <h3>Ukońcozne</h3>
                    <p>{doneTasks}</p>
                </div>
                <div>
                    <h3>W toku</h3>
                    <p>{inProgressTasks}</p>
                </div>
                <div>
                    <h3>Do zrobienia</h3>
                    <p>{todoTasks}</p>
                </div>
                <div>
                    <h3>Klienci</h3>
                    <p>{totalClients}</p>
                </div>
                <div>
                    <h3>Ukończone zadania</h3>
                    <p>{completionRate}</p>
                </div>
            </div>
        </section>
    );
}