import SideMenu from "../components/SideMenu"

export default function Protfolio() {
    return (
        <div>
            <SideMenu />
            <div className="PortFolio ml-[270px]">
                <div className="PortfolioText">
                    <h2 className="text-4xl font-bold p-10 block">
                        Portfolio
                        <div className="ddd border-t-4 w-[60px] border-[var(--skin)]"></div>
                        <div className="ddd border-t-4 w-[30px] mt-1 border-[var(--skin)]"></div>
                    </h2>

                </div>
            </div>

        </div>
    )
}

