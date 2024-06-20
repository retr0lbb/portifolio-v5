
interface MessageProps {
    sender: "you" | string,
    content: string
}

export const Message: React.FC<MessageProps> = ({content, sender}) => {
    return(
        <div className={`flex flex-col ${sender === "you"? "items-end": "items-start"} `}>
            <div className="flex items-start justify-between">
              <p>{sender}</p>
            </div>
            <div className={`${sender === "you"? "bg-green-500": "bg-blue-500"} p-3 rounded-b-xl ${sender === "you"? "rounded-tl-xl": "rounded-tr-xl"}`}>
              <p>
                {content}
              </p>
            </div>
        </div>
    )
}