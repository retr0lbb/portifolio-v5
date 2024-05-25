import { IconButton } from "../iconButton"
import {Instagram, Linkedin, MessageCircle, AtSign} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export const ButtonWrapper: React.FC = () => {
    return(
        <div className="flex items-center gap-4 mt-4">
            <IconButton>
                <Linkedin size={28} />
            </IconButton>

            <IconButton>
                <FaWhatsapp size={28} />
            </IconButton>

            <IconButton>
                <AtSign size={28}/>
            </IconButton>
        </div>
    )
}