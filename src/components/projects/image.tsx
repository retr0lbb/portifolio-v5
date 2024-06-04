import Image, { ImageProps as nextImageProps } from "next/image"
import React, {ComponentProps} from "react"
import { twMerge } from "tailwind-merge"

interface ImageProps extends nextImageProps {}

export const ProjectImage: React.FC<ImageProps> = ({ ...rest }) => {
    return(
        <Image className={twMerge("w-full h-full absolute inset-0 object-cover bg-red-800 top-0 left-0 right-0 bottom-0", rest.className)} {...rest}></Image>
    )
}

