import SideMenu from "../components/SideMenu"
import PortfolioCard from "../components/PortfolioCartd"
import projects from "../components/Projects"

export default function Protfolio() {
    return (
        <>
            <SideMenu />
            <div className="flex justify-center flex-row items-center pt-12">
                <div className="PortFolio w-full xl:ml-[270px] max-w-[1150px]">
                    <div className="PortfolioText">
                        <h2 className="text-4xl font-bold p-10 block">
                            <p className="text-4xl font-bold text-[var(--texttitle)]">Portfolio</p>
                            <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                            <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                        </h2>

                        <div className="mb-4 p-10 flex flex-col items-center">
                            <p className="text-lg text-[var(--text)]">
                                Below are some of the frontend projects I’ve developed. I focused on writing clean code with 
                                modern web technologies and best practices to build responsive, efficient, and user-friendly interfaces.
                                <br />
                                All of these projects are <span className="font-semibold">open-source</span>, and you can check out their 
                                source code on my GitHub.
                            </p>
                            <a href="https://github.com/homayonazar?tab=repositories" target="_blank" rel="noopener noreferrer"><div className="btn1 mt-5 bg-[var(--skin)] text-white w-35 p-3 rounded-4xl text-center text-xl hover:scale-105 duration-300 cursor-pointer">GitHub</div></a>

                        </div>

                        <div className="Gallery mt-5">
                            <div className="upperRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-10">
                                {projects.map((project, index) => (
                                    <PortfolioCard key={index} img={project.img} text={project.text} url={project.url} url2={project.url2}  />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}