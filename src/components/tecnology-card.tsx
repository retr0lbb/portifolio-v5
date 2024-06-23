
interface TecnologyCardProps {
    Icon: any,
    tecName: string
}

export const TecnologyCard: React.FC<TecnologyCardProps> = ({Icon, tecName}) => {
    return(
        <div className="flex flex-col gap-2 md:hover:scale-105 items-center justify-center rounded-2xl size-36 transition-all">
            <Icon />
            <p className="text-medium">{tecName}</p>
        </div>
    )
}