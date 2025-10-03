import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "../components/SideMenu";
import { faLinkedin, faSquareInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields!");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch("https://homayonazar.com/api/new_api/callForm/index.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "MySuperSecretKey123"
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const result = await response.json();

            if (result.status === "success") {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setError("");
            } else {
                setError(result.message || "Failed to submit form");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <SideMenu />
            <div className="CONTACT flex justify-center pt-12">
                <div className="contact w-full xl:ml-[270px] max-w-[1150px] ">
                    <div className="text-4xl font-bold p-10 text-[var(--texttitle)]">
                        <p className="text-4xl font-bold text-[var(--texttitle)]">Contact</p>
                        <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                        <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>

                        <div className="mainSec flex flex-col my-5">
                            <div className="h2 text-center text-3xl text-[var(--skin)] mt-5">
                                Have You Any Question ?
                            </div>
                            <p className="text-center text-[20px] my-7 text-[var(--text)]">
                                I'M AT YOUR SERVICE
                            </p>

                            <div className="socialMedia grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                                <div className="instagram flex flex-col justify-center items-center py-5">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faSquareInstagram} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Instagram</p>
                                    <a href="https://www.instagram.com/homayonazar">
                                        <p className="text-lg font-normal">Click here to visit</p>
                                    </a>
                                </div>
                                <div className="telegram flex flex-col justify-center items-center py-5">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faTelegram} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Telegram</p>
                                    <a href="https://t.me/homayonazar">
                                        <p className="text-lg font-normal">Click here to visit</p>
                                    </a>
                                </div>
                                <div className="linkedin flex flex-col justify-center items-center py-5">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faLinkedin} />
                                    <p className="text-2xl font-bold text-[var(--text)]">Linkedin</p>
                                    <a href="https://www.linkedin.com/in/homayonazar">
                                        <p className="text-lg font-normal">Click here to visit</p>
                                    </a>
                                </div>
                                <div className="email flex flex-col justify-center items-center py-5">
                                    <FontAwesomeIcon className="text-[var(--skin)]" icon={faEnvelope} />
                                    <p className="text-2xl font-bold text-[var(--text)]">E-mail</p>
                                    <a href="mailto:contact@homayonazar.com">
                                        <p className="text-lg font-normal">contact@homayonazar.com</p>
                                    </a>
                                </div>
                            </div>

                            <p className="text-center text-3xl text-[var(--skin)] mt-10">SEND ME AN EMAIL</p>
                            <p className="text-center text-[20px] my-7 text-[var(--text)]">I'M VERY RESPONSIVE TO MESSAGE</p>

                            <form onSubmit={handleSubmit} className="contactForm   grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                                <div className="firstRow flex flex-col sm:flex-row gap-5 md:col-span-2">
                                    <input type="text" placeholder="Name & Lastname" value={name} onChange={(e) => setName(e.target.value)} className="w-full sm:w-1/2 h-12 border border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0" />
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full sm:w-1/2 h-12 border border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0" />
                                </div>
                                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full my-6 h-12 border border-gray-300 bg-white rounded-3xl text-xl ps-4 font-normal outline-0 md:col-span-2" />
                                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-32 bg-white rounded-3xl font-normal text-xl p-5 outline-0 resize-none md:col-span-2" />
                                <div className="btn flex justify-center sm:justify-start md:col-span-2">
                                    <button type="submit" disabled={loading}
                                        className={`mt-5 bg-[var(--skin)] text-white w-55 p-3 rounded-2xl text-center text-xl duration-300 cursor-pointer ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}`}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                    {submitted && (<p className="text-green-600 font-semibold text-2xl text-center mt-7 ms-10 md:col-span-2">Form submitted successfully!</p>)}
                                    {error && (<p className="text-red-600 font-semibold text-2xl text-center mt-2 md:col-span-2">{error}</p>)}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}