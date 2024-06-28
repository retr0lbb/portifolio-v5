import Page from "@/components/sectionCreator"
import MessageRows from "@/components/message"
import Me from "@/static/Main.png"
import Image from "next/image"
import { IoIosSchool } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPrisma, SiMongodb, SiRust, SiNestjs } from "react-icons/si"
import { FaComputer } from "react-icons/fa6";
import { TecnologyCard } from "../tecnology-card"
import { DownloadVcButton } from "../download-vc-button"
import {useTranslations} from "next-intl"

export const AboutPage: React.FC = () => {
  const t = useTranslations("About")
    return(
      <Page.root 
        id="about" 
        className="flex flex-col gap-8 p-10"
        initial={{
          opacity: 0,
          x: 20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
          margin: "-200px"
        }}
      >

        <Page.title >{t("Title")}</Page.title>
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 border-contrast-light/30">
          <div className="flex flex-col items-center gap-20 px-4 pt-6">
            <Image draggable={false} className="lg:size-96 size-72  object-cover rounded-full outline outline-contrast-light" src={Me} alt="chubby boy in a dark blue smoking with blue decorations holding a sign in front of himself" />
            
            <div className="flex flex-col items-center">
              <div className="text-left px-8 py-4 dark:bg-zinc-800 bg-zinc-200 text-zinc-900 dark:text-zinc-200 rounded-b-3xl rounded-tr-3xl text-sm md:text-normal">
                {t("Me.msgMain.pt1")+ " "} <strong>Henrique Barbosa Sampaio</strong>{", " + t("Me.msgMain.pt2")}
              </div> 
              <DownloadVcButton />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="col-span-2 text-center w-full flex items-center justify-center place-items-center text-xl md:text-2xl lg:text-3xl font-bold mt-6">
              <FaComputer className="mr-5" />
              <p>{t("tec")}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-5 place-items-center text-6xl md:text-7xl">
              <TecnologyCard Icon={RiNextjsFill} tecName="Nextjs" />
              <TecnologyCard Icon={FaReact} tecName="Reactjs" />
              <TecnologyCard Icon={FaNodeJs} tecName="Nodejs" />
              <TecnologyCard Icon={SiTypescript} tecName="Typescript" />
              <TecnologyCard Icon={SiPrisma} tecName="Prisma ORM" />
              <TecnologyCard Icon={SiMongodb} tecName="Mongo DB" />
              <TecnologyCard Icon={SiRust} tecName="Rust" />
              <TecnologyCard Icon={SiNestjs} tecName="NestJs" />
            </div>
          </div>

          <MessageRows.root>
            <MessageRows.title><IoIosSchool className="mr-5"/>{t("Education")}</MessageRows.title>
            <MessageRows.Message sender="Barack Obama" content={t("Messages.m1")} />
            <MessageRows.Message sender="you" content={t("Messages.m2")} />
            <MessageRows.Message sender="Barack Obama" content={t("Messages.m3")} />
            <MessageRows.Message sender="you" content={t("Messages.m4")} />
            <MessageRows.Message sender="Barack Obama" content={t("Messages.m5")} />
            <MessageRows.Message sender="you" content={t("Messages.m6")} />
            <MessageRows.Message sender="Barack Obama" content={t("Messages.m7")}/>
            <MessageRows.Message sender="you" content={t("Messages.m8")} />
          </MessageRows.root>
        </section>
      </Page.root>
    )
}