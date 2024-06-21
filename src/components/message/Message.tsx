interface MessageProps {
    sender: "you" | string,
    content: any,
    hasSendedBefore?: boolean
}

export const Message: React.FC<MessageProps> = ({content, sender, hasSendedBefore}) => {
    return(
        <div className={`flex flex-col max-w-[80%] md:max-w-[70%] 
        ${sender === "you" ? "self-end items-end" : "items-start"}`}>
            <div className="flex items-start justify-between text-xs dark:text-zinc-500 text-zinc-400">
              {!hasSendedBefore? (<p>{sender}</p>): null}
            </div>
            <div className={`${sender === "you"? "bg-zinc-700": "bg-zinc-800"} p-3 rounded-b-xl 
            ${sender === "you"? "rounded-tl-xl": "rounded-tr-xl"}`}>
              <p className="text-xs md:text-sm dark:text-zinc-200 text-zinc-300">
                {content}
              </p>
            </div>
        </div>
    )
}