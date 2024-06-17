import { BookMarked } from "lucide-react"
import Image from "next/image"

export interface repoProps {
    properties: {
        repoName: string,
        repoOwner: string,
        repoUpdatedAt: string,
        imageSrc: string,
        repoDesc: string,
        repoLanguage: string,
        linkToRepo: string,
        key: string
    }
}

export const Repo: React.FC<repoProps> = ({properties}) => {

    const repoDate = new Date(properties.repoUpdatedAt)
    return(
        <div key={properties.key} id={properties.key} className="border border-contrast-light/40 rounded-xl dark:border-contrast-light/10 p-5">
            <div className="flex items-center gap-10 md:gap-3">
                <div className="flex items-center gap-1 text-contrast-light">
                    <Image width={100} height={100} className="size-6 mr-1 rounded-full border border-contrast-light/40 object-cover"  
                    alt="some image" src={properties.imageSrc} />
                    {properties.repoOwner}
                </div>

                <div className="text-xs md:text-medium">
                    Updated in: {repoDate.toLocaleDateString()}
                </div>
            </div>

            <div className="border-t border-contrast-light/20 mt-2 py-3">
                <a href={properties.linkToRepo} target="_blank"  className="flex items-baseline gap-2 hover:underline">
                    <BookMarked />
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{properties.repoName}</p>
                </a>
                <div className="mt-2 text-contrast-light text-xs md:text-medium">
                    {properties.repoDesc?? "No description"}
                </div>
            </div>
        </div>
    )
}