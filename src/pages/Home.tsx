import { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";

export default function Home() {

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
      <SideMenu />

      <div className="ml-[270px] p-4 ">
        <h1>Test for home page</h1>
        <p>under main text sample</p>
      </div>
    </div>
  )
}