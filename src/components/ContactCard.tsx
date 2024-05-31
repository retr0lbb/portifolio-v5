import SOMEIMAGE from "@/static/placeholder.jpeg"
import { IconButton } from "./iconButton"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion"
import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

export const ContactCardFront: React.FC = () => {
    return(
        <motion.div
            className="flex flex-col justify-center bg-white/10 border border-white/10 rounded-xl relative"
        >
            <div className="w-full px-16 grid py-5 place-items-center">
                <p className="text-4xl font-bold font-mono text-white/80">Henrique Barbosa</p>
                <p className="text-xl font-mono mb-5 text-white/50">WEB DEVELOPER</p>
                {/** HEADER PROPS */}
                <img src={SOMEIMAGE.src} alt="" className="bg-green-50 rounded-full object-cover size-80" />
            </div>

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
                    <div className="absolute top-5 right-5 cursor-pointer">
                        <FaArrowsRotate color="gray"/>
                    </div>
                </div>
        </motion.div>
           
    )
}

interface contractCardBackProps{
    isOnback: boolean,
    setIsOnback: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContactCardBack: React.FC<contractCardBackProps> = ({isOnback, setIsOnback}) => {
    return(
            <motion.div
                initial={{
                    scaleX: 0
                }} 
                animate={{
                    scaleX: isOnback? 1: 0
                }}
                className="absolute inset-0 bg-red-500">
                <div onClick={() => {setIsOnback(prev => !prev)}} className="absolute top-5 right-5 cursor-pointer">
                    <FaArrowsRotate color="gray"/>
                </div>
            </motion.div>
        
    )
}
