import SideMenu from "../components/SideMenu";

export default function About() {
    const skills = [
        { name: "HTML/CSS", percent: 90 },
        { name: "JavaScript/TypeScript", percent: 70 },
        // { name: "React", percent: 60 },
    ];
    return (
        <div>
            <SideMenu />
            <div className="ABOUT flex justify-center pt-12">
                <div className="About w-full xl:ml-[270px] max-w-[1150px]">
                    <h2 className="text-4xl font-bold p-10 block">
                        <p className="text-4xl text-[var(--texttitle)]">About me</p>
                        <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                        <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                    </h2>
                    <p className="text-2xl font-bold ps-10  text-[var(--text)]">About My <span className="text-[var(--skin)]"> Expertise</span></p>
                    <p className="px-10 pt-5  text-[var(--text)]">In this section, you will get to know my background, skills, and an overview of who I am.
                        My main focus here is to share the knowledge and expertise I have gained so far. This includes the tools and technologies
                        I’ve mastered, the projects I’ve worked on, and my journey as a front-end developer. My aim is to give you a
                        clear understanding of what I bring to the table and how I can contribute to your projects or ideas.
                    </p>
                    <div className="experienceSec w-full flex flex-col px-10 pt-5 gap-2 md:flex-row ">

                        <div className="leftSecMain leftSec w-full h-80  rounded-2xl flex flex-col mt-5 md:w-3/4 ">
                            <div className="leftSec  h-80  rounded-2xl flex flex-col sm:flex-row " >
                                <div className="left1 w-1/2 pe-10">
                                    <p className="font-bold  text-[var(--text)]">Website : </p><span className="block pb-2 border-b-1 border-gray-300 text-[var(--text)]">www.homayonazar.com</span>
                                </div>
                                <div className="right1 w-1/2 ">
                                    <p className="font-bold  text-[var(--text)]">E-mail : </p><span className="block pb-2 border-b-1 border-gray-300 text-[var(--text)]">contact@homayonazar.com</span>
                                </div>

                            </div>
                            <div className="leftSec h-80 rounded-2xl flex flex-row " >
                                <div className="left1 w-1/2 pe-10">
                                    <p className="font-bold text-[var(--text)]">Phone Number : </p><span className="block pb-2 border-b-1 text-[var(--text)] border-gray-300">+90 XXX XXX XX XX</span>
                                </div>
                                <div className="right1 w-1/2">
                                    <p className="font-bold text-[var(--text)]">Location :</p><span className="block pb-2 border-b-1 text-[var(--text)] border-gray-300">Istanbul, Turkey</span>
                                </div>

                            </div>
                            <div className="leftSec h-80 rounded-2xl flex flex-row " >
                                <div className="left1 w-1/2 pe-10">
                                    <p className="font-bold text-[var(--text)]">Specialization : </p><span className="block pb-2 border-b-1 text-[var(--text)] border-gray-300">Front-End Development, Responsive Design</span>
                                </div>
                                <div className="right1 w-1/2 pe-10">
                                    <p className="font-bold text-[var(--text)]">Work Experience : </p><span className="block pb-2 border-b-1 text-[var(--text)] border-gray-300">5+ Years in Front-End Development</span>
                                </div>

                            </div>
                            <div className="Buttons flex flex-row gap-5 ms-10">
                                <a href="https://github.com/homayonazar" target="_blank" rel="noopener noreferrer"><div className="btn1 mt-5 bg-[var(--skin)] text-white w-35 p-3 rounded-4xl text-center text-xl hover:scale-105 duration-300 cursor-pointer">GitHub</div></a>
                                <a href="https://www.linkedin.com/in/homayonazar" target="_blank" rel="noopener noreferrer"><div className="btn2 mt-5 bg-[var(--skin)] text-white w-35 p-3 rounded-4xl text-center text-xl hover:scale-105 duration-300 cursor-pointer">Linkedin</div></a>
                            </div>
                        </div>
                        <div className="rightSec w-full rounded-2xl  mt-30 sm:mt-0  p-6 md:w-1/2 mb-10">
                            <div className="progressBar flex flex-col space-y-8">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="flex justify-between mb-2">
                                            <h5 className="text-base font-semibold text-[var(--text)]">{skill.name}</h5>
                                            <span className="text-sm font-medium  text-[var(--text)]">{skill.percent}%</span>
                                        </div>
                                        <div className="relative w-full h-[7px] bg-gray-200 rounded-md">
                                            <div className="absolute left-0 top-0 h-full rounded-md bg-[var(--skin)]"
                                                style={{ width: `${skill.percent}%` }}>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
