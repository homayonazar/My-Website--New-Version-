import SideMenu from "../components/SideMenu";

export default function About() {
    return (
        <div>
            <SideMenu />
            <div className="About ml-[270px]">
                <h2 className="text-4xl font-bold p-10 block">
                    <p className="text-4xl text-[var(--texttitle)]">About me</p>
                    <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                    <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                </h2>
                <p className="text-2xl font-bold ps-10 ">About My <span className="text-[var(--skin)]"> Expertise</span></p>
                <p className="px-10 pt-5">In this section, you will get to know my background, skills, and an overview of who I am.
                    My main focus here is to share the knowledge and expertise I have gained so far. This includes the tools and technologies
                    I’ve mastered, the projects I’ve worked on, and my journey as a front-end developer. My aim is to give you a
                    clear understanding of what I bring to the table and how I can contribute to your projects or ideas.
                </p>
                <div className="experienceSec w-full flex flex-row px-10 pt-5 gap-2">
                    <div className="leftSec w-3/4 h-80 bg-amber-300 rounded-2xl" ></div>
                    <div className="rightSec w-1/4 h-80 bg-amber-600 rounded-2xl"></div>
                </div>
            </div>

        </div>
    )
}
