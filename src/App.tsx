import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from "./pages/About";
import {ReactComponentElement, useCallback} from "react";
import Skills from "./pages/Skills";
import Socials from "./pages/Socials";

type PageType = {
    path: string,
    title: string,
    component: ReactComponentElement<any>,
    next?: PageType,
};

const socialsPage = {path: '/social', title: 'Social handles', component: <Socials/>};
const skillsPage = {path: '/skills', title: 'Skills', component: <Skills/>, next: socialsPage};
const aboutPage = {path: '/', title: 'About', component: <About/>, next: skillsPage};
const pages: PageType[] = [aboutPage, skillsPage, socialsPage];

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const currentPage = useCallback(() => {
        return pages.find(page => page.path === location.pathname);
    }, [location]);

    return (
        <>
            <div className="flex flex-col lg:flex-row h-full font-rubik">
                <div className="flex flex-col basis-2/12 lg:basis-1/3 bg-brand-blue text-white p-4">
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="font-rubikDirt text-5xl lg:text-8xl">Ore Adeleye</h1>
                        <h2 className="font-rubikMaze text-2xl lg:text-4xl">Full Stack Developer</h2>
                    </div>
                    <h3 className="self-end font-rubikMaze lg:text-xl">{currentPage()?.title}</h3>
                </div>
                <div className="flex-1 flex flex-col bg-gray-200 text-gray-700">
                    <div className="flex flex-col p-4 lg:justify-center lg:basis-3/4">
                        <Routes location={location}>
                            {pages.map(page => (
                                <Route key={page.path} path={page.path} element={page.component}/>
                            ))}
                        </Routes>
                    </div>
                    <div className="flex-1 flex justify-between items-center p-4">
                        <div>
                            {location.pathname === '/' || <>
                                <button className="link-solid" onClick={() => navigate('/')}>
                                    <span className="fa-solid fa-arrow-left"></span> Previous
                                </button>
                            </>}
                        </div>
                        {currentPage()?.next && <>
                            <Link to={currentPage()?.next?.path || '/'} className="link-solid">
                                {currentPage()?.next?.title} <span className="fa-solid fa-arrow-right"></span>
                            </Link>
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
