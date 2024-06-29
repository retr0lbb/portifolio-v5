import ContactCard from "@/components/contact-card"
import Me from "@/static/Main.png"
import LastActivity from "../last_activity"
import Page from "@/components/sectionCreator"
import { useTranslations } from "next-intl"

interface ContactId {
    id: string,
    repo: any[]
}

export const Contact: React.FC<ContactId> = ({id, repo}) => {
    const t = useTranslations("Contact")
    return(
            <Page.root className="" id="contact">
                <Page.title>
                    {t("Title")}
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
                    <ContactCard.header imageAlt="beautiful person centered on the middle" imgSrc={Me} subtitle="Web developer" title="Henrique Barbosa"/>
                    <ContactCard.body gambs={t("by")} />
                </ContactCard.root>

                <LastActivity repo={repo}/>
            </div>
        </Page.root>
    )
}