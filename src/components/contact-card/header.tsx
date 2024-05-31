

interface headerProps {
    title: string,
    subtitle: string,
    imgSrc: string
}

export const header: React.FC<headerProps> = ({imgSrc, subtitle, title}) => {
    return(
        <div className="w-full px-16 grid py-5 place-items-center">
            <p className="text-4xl font-bold font-mono text-white/80">{title}</p>
            <p className="text-xl font-mono mb-5 text-white/50">{subtitle.toUpperCase()}</p>
            <img src={imgSrc} alt="" className="bg-green-50 rounded-full object-cover size-80" />
        </div>
    )
}