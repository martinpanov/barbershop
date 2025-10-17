import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const serviceArticles = [
  {
    imageName: "scissors-golden",
    service: "Haircuts",
    serviceDetails:
      "Experience the art of personalized haircuts with our skilled barbers. We carefully craft haircuts tailored to your style, ensuring you leave feeling confident and looking impeccable. Unleash your best look today!",
  },
  {
    imageName: "razor-golden",
    service: "Shaving",
    serviceDetails:
      "Indulge in the ultimate relaxation with our expertly tailored and sophisticated shaving services. Let our skilled barbers pamper you with precision and the finest grooming experience, leaving you rejuvenated and refined.",
  },
  {
    imageName: "massage-golden",
    service: "Massages",
    serviceDetails:
      "Indulge in the epitome of relaxation with our revitalizing barber massages. Experience the skilled hands of our barbers as they soothe and rejuvenate your body and mind, leaving you refreshed and invigorated.",
  },
  {
    imageName: "beard-golden",
    service: "Beard Grooming",
    serviceDetails:
      "Discover the art of beard refinement through our meticulous grooming expertise. Our skilled barbers shape, trim, and nourish your beard, creating a polished and stylish look that complements your individuality perfectly.",
  },
] as const;

export const Services: React.FC = () => {
  return (
    <section className="flex justify-center px-10 pt-10 pb-32 xl:px-0">
      <div className="flex flex-col gap-11 lg:max-w-7xl">
        <h2 className="mb-10 text-4xl italic font-bold text-left">
          <span className="underline decoration-1 underline-offset-8">
            Our servi
          </span>
          ces
        </h2>
        {serviceArticles.map((article) => (
          <Card key={article.service}>
            <CardContent className="flex flex-col items-center gap-6 md:flex-row">
              <Image
                quality={100}
                width={128}
                height={128}
                src={`/${article.imageName}.png`}
                alt={article.imageName}
                className="w-32 h-32"
              />
              <div className="flex flex-col gap-4 text-center md:text-left">
                <CardTitle className="text-2xl font-bold">{article.service}</CardTitle>
                <CardDescription className="text-lg">{article.serviceDetails}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};