import SideMenu from "../components/SideMenu";

export default function Contact() {
    return (
        <div>
            <SideMenu />
            <div className="CONTACT">
                <div className="contact ml-[270px] max-w-300 ">
                    <h2 className="text-4xl font-bold p-10  text-[var(--texttitle)] ">
                        <p className="text-4xl font-bold  text-[var(--texttitle)]">Contact</p>
                        <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                        <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                    </h2>
                </div>
            </div>

        </div>
    )
}