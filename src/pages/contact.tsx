import ContactCard from "@/components/contact-card"
import SOMETHING from "@/static/placeholder.jpeg"
import {BookMarked} from "lucide-react"

interface ContactId {
    id: string
}

export const Contact: React.FC<ContactId> = ({id}) => {
    return(
        <main id={id} className="w-full flex flex-col p-10 gap-8">
            <h1 className="text-7xl font-bold font-mono w-full text-background-dark dark:text-background-ligth">
                Como falar comigo?
            </h1>
            <div className="w-full flex px-5 gap-10 mt-3">
                <ContactCard.root
                    initial={{
                        y: -500,
                        opacity: 0,
                        scale: 0
                    }}

                    whileInView={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px"
                    }}
                className="">
                    <ContactCard.header imgSrc={SOMETHING.src} subtitle="Web developer" title="Henrique Barbosa"/>
                    <ContactCard.body />
                </ContactCard.root>

                <div className="flex flex-1 py-2 px-14 gap-5 flex-col items-center justify-center text-background-ligth">
                    <p className="w-full text-4xl">Atividades recentes:</p>
                    <div className="rounded-2xl flex-1 w-full border-2 p-4 border-white/10">
                        <div>
                            <BookMarked />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}