import Image from "next/image"

interface headerProps {
    title: string,
    subtitle: string,
    imgSrc: any,
    imageAlt: string
}

export const header: React.FC<headerProps> = ({imgSrc, subtitle, title}) => {
    return(
        <div className="w-full px-8 md:px-12 lg:px-16 grid py-5 place-items-center">
            <p className="text-2xl md:text-4xl font-bold text-background-dark dark:text-white/80">{title}</p>
            <p className="text-sm md:text-xl text-contrast-light dark:text-white/50">{subtitle.toUpperCase()}</p>
            <Image src={imgSrc} alt="" className="mt-6 rounded-full object-cover size-48 lg:size-80" />
        </div>
    )
}