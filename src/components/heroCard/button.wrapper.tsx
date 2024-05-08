import { IconButton } from "../iconButton"
import {Instagram, Linkedin, MessageCircle, AtSign} from "lucide-react"

export const ButtonWrapper: React.FC = () => {
    return(
        <div className="flex items-center gap-4 mt-4">
            <IconButton>
                <Linkedin />
            </IconButton>

            <IconButton>
                <MessageCircle />
            </IconButton>

            <IconButton>
                <AtSign />
            </IconButton>
        </div>
    )
}