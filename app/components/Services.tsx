import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
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
    <section className="flex justify-center pt-10 pb-32 bg-primary">
      <div className="flex flex-col px-10 max-w-7xl gap-11 xl:px-0 xl:grid xl:grid-cols-4 xl:place-items-center">
        <h2 className="col-span-4 mb-10 text-5xl italic font-bold text-center">
          <span className="md:underline md:decoration-1 md:underline-offset-8">
            Our servi
          </span>
          ces
        </h2>
        {serviceCards.map((card) => (
          <Card key={card.service} className="w-full">
            <CardContent className="flex flex-col gap-3 items-center">
              <Image
                quality={100}
                width={86}
                height={86}
                src={`/${card.imageName}.png`}
                alt={card.imageName}
                className="brightness-0 invert"
              />
              <CardTitle className="text-3xl">{card.service}</CardTitle>
              <CardDescription className="text-center text-lg">{card.serviceDetails}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};