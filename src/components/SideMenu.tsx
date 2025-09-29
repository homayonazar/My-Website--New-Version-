import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faComments, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideMenu() {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "dark" : false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);






    return (
        <div>
            <div className="fixMenu fixed w-[270px] h-full flex flex-col items-center bg-[var(--bgside)] ">
                <h1 className="mt-15 text-2xl text-[var(--text)]">HOMAYONAZAR</h1>
                <div className="absolute w-6 h-6 border-b-[5px] border-r-[5px] border-[var(--skin)] right-5 top-20"></div>
                <div className="absolute w-6 h-6 border-t-[5px] border-l-[5px] border-[var(--skin)] left-5 top-11"></div>
                <br /><br />
                <ul className="space-y-4 text-lg mt-35">
                    <li className="flex items-center gap-2 border-b border-gray-300 hover:underline cursor-pointer">
                        <Link to="/" className="flex items-center gap-2 w-full">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 border-b border-gray-300 hover:underline cursor-pointer">
                        <Link to="/portfolio" className="flex items-center gap-2 w-full">
                            <FontAwesomeIcon icon={faBriefcase} /> Portfolio
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 border-b border-gray-300 hover:underline cursor-pointer">
                        <Link to="/about" className="flex items-center gap-2 w-full">
                            <FontAwesomeIcon icon={faUser} /> About
                        </Link>
                    </li>

                    <li className="flex items-center gap-2 border-b border-gray-300 hover:underline cursor-pointer">
                        <Link to="/contact" className="flex items-center gap-2 w-full">
                            <FontAwesomeIcon icon={faComments} /> Contact
                        </Link>
                    </li>
                </ul>
                <button className='mt-10 cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    )
}

export default SideMenu