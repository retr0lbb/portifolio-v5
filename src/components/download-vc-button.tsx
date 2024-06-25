import { Button } from "@nextui-org/react"
import { IoIosPaper } from "react-icons/io"

export const DownloadVcButton: React.FC = () => {
    const handleClick = () => {
        const filePath = "/output/Henrique Barbosa.pdf"
        const link = document.createElement("a")
        link.href = filePath;
        link.download = "Henrique-Barbosa.pdf"
        link.click()
    }
    return(
        <Button size="lg" className="mt-4" onClick={handleClick} startContent={<IoIosPaper />}>Baixe o Meu Curriculo</Button>
    )
}