import { Snippet } from "@nextui-org/react"

export const body: React.FC = () => {
    return(
        <div className="w-full flex flex-1 flex-col pb-4 items-center justify-center">
        <p className="text-md lg:text-2xl font-mono text-contrast-dark/70 dark:text-contrast-light/80">Me contate em</p>
        
        <div className="flex flex-col items-start justify-around gap-4 py-2">
            <div className="w-full">
                <p className="text-default-500">Email</p>
                <Snippet tooltipProps={{
                    color: "primary"
                }} symbol="@" className="w-full" size="lg">retr0lbb@gmail.com</Snippet>
            </div>

            <div className="w-full">
                <p className="text-default-500">Telefone</p>
                <Snippet tooltipProps={{
                    color: "primary"
                }} symbol="*" className="w-full" size="lg">(11)999429345</Snippet>
            </div>
        </div>
    </div>
    )
}