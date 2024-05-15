import { FC, ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


interface AboutTecnologiesLabelProps extends ComponentProps<"span">{
    Icon: any,
    iconColor?: string,
    textClassName?: string
}


export const AboutTecnologiesLabel: FC<AboutTecnologiesLabelProps> = ({Icon, textClassName, iconColor, className, children, ...rest}) => {
    return(
        <span className={twMerge("flex items-center gap-0.5 hover:scale-105 px-2 rounded", className)} {...rest}>
            <Icon color={iconColor} />
            <span className={twMerge("underline cursor-pointer select-none", textClassName)}>{children}</span>
        </span>
    )
}