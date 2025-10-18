import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const serviceCards = [
  {
    imageName: "scissors",
    service: "Haircuts",
    serviceDetails:
      "Customized haircuts that match your style, delivered with precision.",
  },
  {
    imageName: "razor",
    service: "Shaving",
    serviceDetails:
      "Unwind with our expertly tailored, sophisticated shaving services.",
  },
  {
    imageName: "massage",
    service: "Massages",
    serviceDetails:
      "Indulge in ultimate relaxation with our revitalizing barber massages.",
  },
  {
    imageName: "beard",
    service: "Beard Grooming",
    serviceDetails: "Refine your beard with our meticulous grooming expertise.",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="bg-primary flex justify-center pt-10 pb-32">
      <div className="flex max-w-7xl flex-col gap-11 px-10 xl:grid xl:grid-cols-4 xl:place-items-center xl:px-0">
        <h2 className="col-span-4 mb-10 text-center text-5xl font-bold italic">
          <span className="md:underline md:decoration-1 md:underline-offset-8">
            Our servi
          </span>
          ces
        </h2>
        {serviceCards.map((card) => (
          <Card key={card.service} className="w-full">
            <CardContent className="flex flex-col items-center gap-3">
              <Image
                quality={100}
                width={86}
                height={86}
                src={`/${card.imageName}.png`}
                alt={card.imageName}
                className="brightness-0 invert"
              />
              <CardTitle className="text-3xl">{card.service}</CardTitle>
              <CardDescription className="text-center text-lg">
                {card.serviceDetails}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
