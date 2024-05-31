import { ContactCardFront } from "@/components/ContactCard"


interface ContactId {
    id: string
}

export const Contact: React.FC<ContactId> = ({id}) => {
    return(
        <main id={id} className="w-full flex flex-col bg-red-300 p-10 gap-8">
            <h1 className="text-7xl font-bold font-mono w-full">Se conecte-se comigo</h1>
            <ContactCardFront />
        </main>
    )
}