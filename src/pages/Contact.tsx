import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "../components/SideMenu";
import { faLinkedin, faSquareInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <div>
            <SideMenu />
            <div className="CONTACT">
                <div className="contact ml-[270px] max-w-300 ">
                    <div className="text-4xl font-bold p-10  text-[var(--texttitle)] ">
                        <p className="text-4xl font-bold  text-[var(--texttitle)]">Contact</p>
                        <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                        <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                        <div className="mainSec flex flex-col   my-5">
                            <div className="h2 text-center text-3xl text-[var(--skin)] mt-5">Have You Any Question ?</div>
                            <p className="text-center text-[20px] my-7 text-[var(--text)]">I'M AT YOUR SERVICE</p>
                            <div className="socialMedia flex flex-row mt-10">
                                <div className="instagram w-1/4 flex flex-col justify-center items-center">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faSquareInstagram} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Instagram</p>
                                    <a href="https://www.instagram.com/homayonazar"><p className="text-lg font-normal">Click here to visit</p></a>
                                </div>
                                <div className="telegram w-1/4 flex flex-col justify-center items-center">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faTelegram} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Telegram</p>
                                    <a href="https://t.me/homayonazar"><p className="text-lg font-normal">Click here to visit</p></a>
                                </div>
                                <div className="linkedin w-1/4 flex flex-col justify-center items-center">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faLinkedin} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Linkedin</p>
                                    <a href="https://www.linkedin.com/in/homayonazar"><p className="text-lg font-normal">Click here to visit</p></a>
                                </div>
                                <div className="email w-1/4 flex flex-col justify-center items-center">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faEnvelope} />
                                    <p className="text-2xl font-bold text-[var(--text)]">E-mail</p>
                                    <a href="mailto:contact@homayonazar.com"><p className="text-lg font-normal">contact@homayonazar.com</p></a>
                                </div>
                            </div>
                            <p className="text-center text-3xl text-[var(--skin)] mt-10">SEND ME AN EMAIL</p>
                            <p className="text-center text-[20px] my-7 text-[var(--text)]">I'M VERY RESPONSIVE TO MESSAGE</p>
                            <div className="contactForm flex flex-col">
                                <div className="firstRow flex flex-row gap-5">
                                    <input type="text" placeholder="Name & Lastname" className="w-1/2 h-12 border-1 border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0" />
                                    <input type="email" placeholder="Email" className="w-1/2 h-12 border-1 border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0" />
                                </div>
                                <input type="text" placeholder="Subject" className="w-full my-6 h-12 border-1 border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0" />
                                <textarea name="" id="" placeholder="Message" className="w-full h-30 bg-white rounded-3xl font-normal text-xl p-5  outline-0 resize-none"></textarea>
                                <button className="mt-5 bg-[var(--skin)] text-white w-55 p-3 rounded-2xl text-center text-xl hover:scale-105 duration-300  cursor-pointer">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}