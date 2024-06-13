interface rootProps {
    children?: React.ReactNode
}

export const root: React.FC<rootProps> = ({children}) => {
    return(
        <div className="flex flex-1 py-2 px-14 gap-5 flex-col items-center justify-center text-contrast-dark dark:text-background-ligth">
            <p className="w-full text-4xl">Atividades recentes:</p>
            <div className="rounded-2xl flex-1 w-full border-2 p-4 dark:border-white/10 border-background-dark/10">
                <div className="w-full h-full flex justify-around flex-col">
                    {children}
                </div>
            </div>
        </div>
    )
}