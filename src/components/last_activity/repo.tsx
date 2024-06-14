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
        <div key={properties.key} id={properties.key} className="border border-contrast-dark/40 dark:border-contrast-light/10 p-5">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-contrast-light">
                    <Image width={100} height={100} className="size-6 mr-1 rounded-full border border-contrast-light/40 object-cover"  alt="some image" src={properties.imageSrc} />
                    {properties.repoOwner}
                </div>

                <div>
                    Updated in: {repoDate.toLocaleDateString()}
                </div>
            </div>

            <div className="border-t border-contrast-light/20 mt-2 py-3">
                <a href={properties.linkToRepo} target="_blank"  className="flex items-baseline gap-2 hover:underline">
                    <BookMarked />
                    <p className="text-4xl">{properties.repoName}</p>
                </a>
                <div className="mt-2 text-contrast-light">
                    {properties.repoDesc?? "No description"}
                </div>
            </div>
        </div>
    )
}