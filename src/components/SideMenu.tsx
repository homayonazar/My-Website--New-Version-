import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBriefcase, faComments, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function SideMenu() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "dark" : false;
    });

    const [isOpen, setIsOpen] = useState(false);

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
            <div
                className="hamburgerMEnu fixed top-10 left-10 p-2  bg-[var(--bgside)] border-1 border-[var(--text)] rounded-lg cursor-pointer xl:hidden z-50"
                onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} className="text-2xl text-[var(--text)]" />
            </div>

            <div
                className={`fixed top-0 left-0 w-[270px] h-full flex flex-col items-center bg-[var(--bgside)] transform transition-transform duration-300 z-40
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}>
                <h1 className="mt-15 text-2xl text-[var(--text)]">HOMAYONAZAR</h1>
                <div className="absolute w-6 h-6 border-b-[5px] border-r-[5px] border-[var(--skin)] right-5 top-20"></div>
                <div className="absolute w-6 h-6 border-t-[5px] border-l-[5px] border-[var(--skin)] left-5 top-11"></div>
                <br /><br />
                <ul className="space-y-4 text-lg mt-35">
                    <li className="flex items-center gap-2 border-b border-[var(--border)] hover:underline cursor-pointer">
                        <NavLink to="/" className={({ isActive }) => `flex items-center pb-1 gap-2 w-full ${isActive ? "text-[var(--skin)]" : "text-[var(--border)]"}`}>
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2 border-b border-[var(--border)] hover:underline cursor-pointer">
                        <NavLink to="/portfolio" className={({ isActive }) => `flex items-center pb-1 gap-2 w-full ${isActive ? "text-[var(--skin)]" : "text-[var(--border)]"}`}>
                            <FontAwesomeIcon icon={faBriefcase} /> Portfolio
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2 border-b border-[var(--border)] hover:underline cursor-pointer">
                        <NavLink to="/about" className={({ isActive }) => `flex items-center pb-1 gap-2 w-full ${isActive ? "text-[var(--skin)]" : "text-[var(--border)]"}`}>
                            <FontAwesomeIcon icon={faUser} /> About
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2 border-b border-[var(--border)] hover:underline cursor-pointer">
                        <NavLink to="/contact" className={({ isActive }) => `flex items-center pb-1 gap-2 w-full ${isActive ? "text-[var(--skin)]" : "text-[var(--border)]"}`}>
                            <FontAwesomeIcon icon={faComments} /> Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="fixed bottom-10 flex flex-col justify-center">
                    <button className="mt-10 cursor-pointer text-[var(--border)]" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <p className='bg-[var(--text)] text-[var(--bg)] rounded p-1  transition-transform duration-300 hover:scale-95 '>Light Mode</p> : <p className='bg-[var(--text)] text-[var(--bg)] rounded p-1  transition-transform duration-300 hover:scale-95'>Dark Mode</p>}
                    </button>
                    <div className="colorsBox flex flex-row justify-between mt-4 gap-3">
                        <div className="red bg-[#ec1839] p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-120 hover:active:rotate-20" />
                        <div className="orange bg-[#fa5b0f] p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-120 hover:active:rotate-20" />
                        <div className="green bg-[#36b182] p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-120 hover:active:rotate-20" />
                        <div className="blue bg-[#1854b4] p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-120 hover:active:rotate-20" />
                        <div className="pink bg-[#f021b2] p-4 rounded cursor-pointer transition-transform duration-200 hover:scale-120 hover:active:rotate-20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;