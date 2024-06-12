import { BookMarked } from "lucide-react"
import Image from "next/image"

interface repoProps {
    repoName: string,
    repoOwner: string,
    repoUpdatedAt: string,
    imageSrc: string
}

export const repo: React.FC<repoProps> = ({repoName, repoOwner, repoUpdatedAt, imageSrc}) => {
    return(
        <div className="border border-contrast-dark/40 dark:border-contrast-light/10 p-5">
            <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <BookMarked /> {repoName}
            </div>
            <div className="flex items-center gap-1 text-contrast-light">
                <strong>By: </strong>
                <Image width={100} height={100} className="size-6 mr-1 rounded-full border border-contrast-light/40 object-cover"  alt="some image" src={imageSrc} />
                {repoOwner}
            </div>
            </div>
        </div>
    )
}