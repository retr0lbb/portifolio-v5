import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { IconButton } from "../iconButton"
import { SiGmail } from "react-icons/si"

export const body: React.FC = () => {
    return(
        <div className="w-full flex flex-1 flex-col pb-4 items-center justify-center">
        <p className="text-2xl font-mono text-white/80 mb-2">Me contate em</p>

        <div className="flex items-center justify-around gap-8 py-4 px-8 rounded-full bg-white/10">
            <IconButton className="rounded-xl size-16">
                <FaWhatsapp size={28}/>
            </IconButton>

            <IconButton className="rounded-xl size-16">
                <FaLinkedin size={28}/>
            </IconButton>

            <IconButton className="rounded-xl size-16">
                <SiGmail size={28}/>
            </IconButton>
        </div>
    </div>
    )
}