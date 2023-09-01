import '././Styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback=''>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    );
}


