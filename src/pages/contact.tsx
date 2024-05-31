import ContactCard from "@/components/contact-card"
import SOMETHING from "@/static/placeholder.jpeg"

interface ContactId {
    id: string
}

export const Contact: React.FC<ContactId> = ({id}) => {
    return(
        <main id={id} className="w-full flex flex-col p-10 gap-8">
            <h1 className="text-7xl font-bold font-mono w-full">Se conecte-se comigo</h1>
            <div className="w-full flex"> 
                <ContactCard.root className="">
                    <ContactCard.header imgSrc={SOMETHING.src} subtitle="Web developer" title="Henrique Barbosa"/>
                    <ContactCard.body />
                </ContactCard.root>
            </div>
        </main>
    )
}