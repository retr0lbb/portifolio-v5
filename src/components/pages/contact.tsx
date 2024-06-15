import ContactCard from "@/components/contact-card"
import SOMETHING from "@/static/Ned.jpeg"
import LastActivity from "../last_activity"
import Page from "@/components/sectionCreator"

interface ContactId {
    id: string,
    repo: any[]
}

export const Contact: React.FC<ContactId> = ({id, repo}) => {
    return(
            <Page.root className="" id="">
                <Page.title>
                    Como falar comigo?
                </Page.title>
            <div className="w-full flex flex-col lg:flex-row px-5 gap-10 mt-10">
                <ContactCard.root
                    initial={{
                        y: -500,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                        margin: "-200px"
                    }}
                className="">
                    <ContactCard.header imageAlt="beautiful person centered on the middle" imgSrc={SOMETHING} subtitle="Web developer" title="Henrique Barbosa"/>
                    <ContactCard.body />
                </ContactCard.root>

                <LastActivity repo={repo}/>
            </div>
            </Page.root>
    )
}