import { Button } from "@nextui-org/react"
import { IoIosPaper } from "react-icons/io"
import { useTranslations } from "next-intl"

export const DownloadVcButton: React.FC = () => {
    const t = useTranslations("About")
    const handleClick = () => {
        const filePath = "/output/Henrique Barbosa.pdf"
        const link = document.createElement("a")
        link.href = filePath;
        link.rel = 'noopener noreferrer'; 
        link.target = "_blank"
        link.download = "Henrique-Barbosa.pdf"
        link.click()
    }
    return(
        <Button size="lg" className="mt-4" onClick={handleClick} startContent={<IoIosPaper />}>{t("Me.cv")}</Button>
    )
}