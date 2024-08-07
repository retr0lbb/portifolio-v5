interface rootProps {
    children?: React.ReactNode
}
import { useTranslations } from "next-intl"

export const Root: React.FC<rootProps> = ({children}) => {
    const t = useTranslations("Contact")
    return(
        <div className="flex flex-1 py-2 lg:px-14 gap-5 flex-col items-center justify-center text-contrast-dark dark:text-background-ligth">
            <p className="w-full text-2xl md:text-4xl">{t("Activities")}</p>
            <div className="rounded-2xl flex-1 w-full border-2 p-4 dark:border-white/10 border-background-dark/10">
                <div className="w-full h-full flex justify-around flex-col gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}