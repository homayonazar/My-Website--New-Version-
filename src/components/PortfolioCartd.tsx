type PortfolioCardProps = {
    img: string;
    text: string;
    url?: string;
    url2?: string
}
export default function PortfolioCard({ img, text, url, url2 }: PortfolioCardProps) {
    return (
        <div className="box">
            <img src={img} alt="project" className="w-auto  rounded-2xl border-3 border-white hover:scale-110 transition-transform duration-300 " />
            <p className="bg-white p-2 mt-1 rounded-2xl text-center">{text}
                {url && (<a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 block mt-1">{"* "}Click For LiveView{" *"}</a>)}
                {/* {url && (<a></a>)}  -> اگر درست وجود داشت نمایش بده لاغیر ایگنور کن*/}
                {url2 && (<a href={url2} target="_blank" rel="noopener noreferrer" className="text-green-600 block mt-1">{"* "}GitHub SourceCode{" *"}</a>)}

            </p>
            <p></p>
        </div>
    )
}