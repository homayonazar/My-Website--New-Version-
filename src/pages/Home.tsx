import SideMenu from "../components/SideMenu";
import TypingEffect from "../components/TypingEffect";
import myPic from "../assets/ProjectPhotos/myPic.jpg"

export default function Home() {


    return (
        <div>
            <SideMenu />

            <div className="ml-[270px] p-4">
                <div className="mainSection flex flex-row justify-center items-center content-center gap-1">
                    <div className="p-10 w-2/3 h-180 pt-40">
                        <h1 className="text-3xl text-left my-5">HELLO , My name is <span className="red-force text-4xl">Amirreza Abdollahi</span></h1>
                        <h1 className="text-3xl text-left my-5">Hi,<span className="red-force"> I am <TypingEffect /></span></h1>
                        <span className="text-left block my-5">
                            Explore insights into computer engineering, cutting-edge web design, and front-end development. Join me on a journey of innovation and creativity, where technology and aesthetics seamlessly converge.
                        </span>
                    </div>
                    <div className="rightSec w-1/3 h-180">
                        <div className="photo relative flex justify-center items-center min-h-screen">
                            <img src={myPic} alt="" className="w-70 rounded-xl" />
                            <div className="absolute w-20 h-20 border-b-[10px] border-r-[10px] border-[var(--text)] right-0 bottom-25"></div>
                            <div className="absolute w-20 h-20 border-t-[10px] border-l-[10px] border-[var(--text)] left-0 top-25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}