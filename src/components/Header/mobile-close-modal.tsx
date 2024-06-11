import { IoMenu } from "react-icons/io5";


interface mobileCloseModalProps {
    children: React.ReactNode
}

export const mobileCloseModal: React.FC<mobileCloseModalProps> = ({children}) => {
    return(
        <div className="flex relative items-center justify-center bg-red-500">
            <div className="text-5xl cursor-pointer">
                <IoMenu  />
            </div>
            <div className="absolute top-0 left-0 w-64 h-96 bg-blue-400 -translate-x-full">
                {children}
            </div>
        </div>
    )
}