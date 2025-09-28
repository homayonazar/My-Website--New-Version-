import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faComments, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

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
            <div className="fixMenu fixed w-[270px] h-full flex flex-col items-center bg-[var(--bgside)]">
                <h1 className="mt-15 text-2xl">HOMAYONAZAR</h1>
                <br /><br />
                <ul className="space-y-4 text-lg mt-35  " >
                    <li className="flex items-center gap-2 border-b-1 border-gray-300 hover:underline cursor-pointer">
                        <FontAwesomeIcon icon={faHouse} /> Home
                    </li>
                    <li className="flex items-center gap-2 border-b-1 border-gray-300 hover:underline cursor-pointer">
                        <FontAwesomeIcon icon={faBriefcase} /> Portfolio
                    </li>
                    <li className="flex items-center gap-2 border-b-1 border-gray-300 hover:underline cursor-pointer">
                        <FontAwesomeIcon icon={faUser} /> About
                    </li>
                    <li className="flex items-center gap-2 border-b-1 border-gray-300 hover:underline cursor-pointer">
                        <FontAwesomeIcon icon={faComments} /> Contact
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