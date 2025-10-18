import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import ClientsPage from "./pages/ClientsPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/clients" element={<ClientsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}