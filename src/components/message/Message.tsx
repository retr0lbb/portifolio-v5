import Image from "next/image"

export interface MessageProps {
    sender?: "you" | string,
    content?: any,
    hasSendedBefore?: boolean,
    youImageSrc: any,
    OtherImageSrc: any
}

export const Message: React.FC<MessageProps> = ({content, sender, hasSendedBefore, ImageSrc}) => {
    return(
        <div className={`flex flex-col max-w-[80%] md:max-w-[70%] 
        ${sender === "you" ? "self-end items-end" : "items-start"}`}>
            <div className="flex items-baseline gap-2 justify-between text-xs dark:text-zinc-500 text-zinc-400">
              <div className="rounded-full overflow-hidden bg-red-700 size-5"><Image src={ImageSrc} alt="Icon image on top of the name in the message" /></div>{!hasSendedBefore? (<p>{sender}</p>): null}
            </div>
            <div className={`${sender === "you"? "bg-zinc-700": "bg-zinc-800"} p-3 rounded-b-xl 
            ${sender === "you"? "rounded-tl-xl": "rounded-tr-xl"}`}>
              <p className="text-xs sm:text-sm dark:text-zinc-200 text-zinc-300">
                {content}
              </p>
            </div>
        </div>
    )
}