import SideMenu from "../components/SideMenu";
import TypingEffect from "../components/TypingEffect";
import myPic from "../assets/ProjectPhotos/myPic.jpg"

export default function Home() {


    return (
        <>
            <div>
                <SideMenu />

                <div className="flex justify-center flex-row items-center  pt-12">
                    <div className="w-full xl:ml-[270px] max-w-[1150px] ">
                        <div className="mainSection flex flex-row justify-center  content-center gap-1">
                            <div className="m-0 sm:m-10 w-2/3 pt-30">
                                <h2 className="text-3xl text-left my-5 text-[var(--text)]">HELLO , My name is <span className="red-force text-4xl text-[var(--skin)] font-bold">Amirreza Abdollahi</span></h2>
                                <h2 className="text-3xl text-left my-5 text-[var(--text)]">Hi , I am <TypingEffect /></h2>
                                <span className="text-left text-lg block my-5 text-[var(--text)]">
                                    Explore insights into computer engineering, cutting-edge web design, and front-end development. Join me on a journey of innovation and creativity, where technology and aesthetics seamlessly converge.
                                </span>
                            </div>
                            <div className="rightSec w-1/3 me-5 hidden lg:block" >
                                <div className="photo relative flex justify-center items-center min-h-screen">
                                    <div className="absolute w-20 h-20 border-b-[10px] border-r-[10px] border-[var(--skin)] right-0 bottom-25"></div>
                                    <div className="absolute w-20 h-20 border-t-[10px] border-l-[10px] border-[var(--skin)] left-0 top-25"></div>
                                    <img src={myPic} alt="" className="w-70 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}