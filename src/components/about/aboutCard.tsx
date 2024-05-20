import { Card, Image } from "@nextui-org/react";
import placeHolder from "@/static/placeholder.jpeg"


export const AboutCard: React.FC = () => {
    return(
        <Card
            radius="lg"
            className="border-none row-span-2 col-span-2"
        >
            <Image 
              alt="beautiful man looking down"
              src={placeHolder.src}
            />
        </Card>
    )
}