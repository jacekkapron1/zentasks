import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <header style={{
                padding: '1rem',
                background: '#111',
                color: '#fff'
            }}>
                <nav>
                    <Link to="/dashboard">Dashboard</Link> |{' '}
                    <Link to="/tasks">Tasks</Link> |{' '}
                    <Link to="/clients">Clients</Link> |{' '}
                    <Link to="/login">Login</Link> |{' '}
                </nav>
            </header>
            <main style={{
                padding: '1rem'
            }}>
                <Outlet />
            </main>
        </div>
    )
}