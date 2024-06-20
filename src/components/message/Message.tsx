interface MessageProps {
    sender: "you" | string,
    content: any,
    hasSendedBefore?: boolean
}

export const Message: React.FC<MessageProps> = ({content, sender, hasSendedBefore}) => {
    return(
        <div className={`flex flex-col max-w-[60%] ${sender === "you" ? "self-end items-end" : "items-start"}`}>
            <div className="flex items-start justify-between">
              {!hasSendedBefore? (<p>{sender}</p>): null}
            </div>
            <div className={`${sender === "you"? "bg-green-500": "bg-blue-500"} p-3 rounded-b-xl ${sender === "you"? "rounded-tl-xl": "rounded-tr-xl"}`}>
              <p>
                {content}
              </p>
            </div>
        </div>
    )
}