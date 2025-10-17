import Image from "next/image";
import { RenderIf } from "../RenderIf";
import { Button } from "../ui/button";
import Link from "next/link";

const priceList = [
  {
    name: "Haircut",
    price: "$25",
  },
  {
    name: "Child Haircut",
    price: "$15",
  },
  {
    name: "Haircut For Retiree",
    price: "$15",
  },
  {
    name: "Beard Grooming",
    price: "$15",
  },
  {
    name: "Haircut + Beard Grooming",
    price: "$35",
  },
  {
    name: "Head Massage",
    price: "$30",
  },
  {
    name: "Hair Styling",
    price: "$20",
  },
  {
    name: "Facial Treatment",
    price: "$40",
  },
  {
    name: "Eyebrow Grooming",
    price: "$10",
  },
  {
    name: "Grey Blending",
    price: "$35",
  },
];

type PriceListProps = {
  showImage?: boolean;
  showButton?: boolean;
};

export const PriceList: React.FC<PriceListProps> = ({ showImage, showButton }) => {
  return (
    <section className="flex justify-center py-32">
      <div className="flex gap-12 px-10 w-full max-w-7xl 2xl:px-0">
        <RenderIf condition={showImage}>
          <Image
            quality={100}
            width={768}
            height={734}
            src="/barber-haircut.webp"
            alt="barber-giving-haircut"
            className="hidden object-cover w-3/5 lg:block"
          />
        </RenderIf>
        <article className="flex flex-col w-full gap-3">
          <div className="p-4 bg-primary">
            <div className="border-2 py-7">
              <h2 className="mb-2 text-4xl italic font-bold text-center">
                Classic Cuts
              </h2>
              <h3 className="text-4xl text-center">
                PRICE LIST
              </h3>
            </div>
          </div>
          <div className="px-6 border py-9">
            <ul className="flex flex-col w-full gap-2 text-xl font-bold md:text-2xl lg:text-xl xl:text-2xl">
              {priceList.map((service, index) => (
                <li
                  key={index}
                  className="flex after:order-1 after:mb-1 after:flex-1 after:border-b-2 after:border-dotted after:content-['']"
                >
                  <span>{service.name}</span>
                  <span className="order-2">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <RenderIf condition={showButton}>
            <Button asChild className="p-8 text-xl">
              <Link href="/booking">
                Book an appointment
              </Link>
            </Button>
          </RenderIf>
        </article>
      </div>
    </section>
  );
};