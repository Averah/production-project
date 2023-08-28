import { Counter } from "./Components/Counter";
import '././Styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import MainPageLazy from './Pages/MainPage/MainPage.lazy';
import AboutPageLazy from "./Pages/AboutPage/AboutPage.lazy";
import { Suspense } from "react";
import { useTheme } from "./Theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<MainPageLazy />}></Route>
                <Route path='/about' element={<AboutPageLazy />} ></Route>
            </Routes>
            </Suspense>
            <Counter />
        </div>

    );
}


