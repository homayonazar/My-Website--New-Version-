import SideMenu from "../components/SideMenu"
import img1 from "../assets/ProjectPhotos/Portfolio/A-1.jpg"
import img2 from "../assets/ProjectPhotos/Portfolio/A-2.jpg"
import img3 from "../assets/ProjectPhotos/Portfolio/B-1.jpg"
import img4 from "../assets/ProjectPhotos/Portfolio/B-2.jpg"
import img5 from "../assets/ProjectPhotos/Portfolio/calc.jpg"
import img6 from "../assets/ProjectPhotos/Portfolio/shopping-proj.jpg"
import img7 from "../assets/ProjectPhotos/Portfolio/mega-1.jpg"
import img8 from "../assets/ProjectPhotos/Portfolio/mega-2.jpg"
import img9 from "../assets/ProjectPhotos/Portfolio/mobileApp.jpg"





export default function Protfolio() {

    return (
        <>
            <SideMenu />
            <div className="flex justify-center flex-row items-center">
                <div className="PortFolio ml-[270px] max-w-300 ">
                    <div className="PortfolioText">
                        <h2 className="text-4xl font-bold p-10 block">
                            <p className="text-4xl font-bold text-[var(--texttitle)]">Portfolio</p>
                            <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                            <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                        </h2>
                        <p className="p-10 text-[var(--text)]">
                            Below are some of the frontend projects I’ve developed. I focused on writing clean HTML, CSS,
                            and JavaScript to create responsive and user-friendly interfaces.
                        </p>
                        <div className="Gallery mt-5">
                            <div className="upperRow flex flex-row gap-5 px-10">
                                <div className="box1">
                                    <img src={img1} alt="" className="w-120  rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl ">My current website with light theme View Live Project</p>
                                </div>
                                <div className="box2">
                                    <img src={img2} alt="" className="w-120  rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                                <div className="box3">
                                    <img src={img3} alt="" className="w-120  rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                            </div>
                            <div className="upperRow flex flex-row gap-5 px-10 mt-10">
                                <div className="box4">
                                    <img src={img4} alt="" className="w-120 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                                <div className="box5">
                                    <img src={img5} alt="" className="w-120 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                                <div className="box6">
                                    <img src={img6} alt="" className="w-120 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                            </div>
                            <div className="upperRow flex flex-row gap-5 px-10 mt-10">
                                <div className="box4">
                                    <img src={img7} alt="" className="w-120 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                                <div className="box5">
                                    <img src={img8} alt="" className="w-120 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                                <div className="box6">
                                    <img src={img9} alt="" className="h-58 rounded-2xl" />
                                    <p className="bg-white p-2 mt-1 rounded-2xl">My current website with light theme View Live Project</p>

                                </div>
                            </div>


                        </div>



                    </div>
                </div>

            </div></>
    )
}

