import ContactCard from "@/components/contact-card"
import SOMETHING from "@/static/placeholder.jpeg"
import LastActivity from "../last_activity"

interface ContactId {
    id: string,
    repo: any[]
}

export const Contact: React.FC<ContactId> = ({id, repo}) => {
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

                <LastActivity repo={repo}/>
            </div>
        </main>
    )
}