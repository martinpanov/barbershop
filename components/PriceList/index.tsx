import Image from "next/image";
import { RenderIf } from "../RenderIf";
import { Button } from "../ui/button";
import Link from "next/link";
import { SERVICES } from "@/app/constants/services";

type PriceListProps = {
  showImage?: boolean;
  showButton?: boolean;
};

export const PriceList: React.FC<PriceListProps> = ({
  showImage,
  showButton,
}) => {
  return (
    <section className="flex justify-center py-32">
      <div className="flex w-full max-w-7xl gap-12 px-10 2xl:px-0">
        <RenderIf condition={showImage}>
          <Image
            quality={100}
            width={768}
            height={734}
            src="/barber-haircut.webp"
            alt="barber-giving-haircut"
            className="hidden w-3/5 object-cover lg:block"
          />
        </RenderIf>
        <article className="flex w-full flex-col gap-3">
          <div className="bg-primary p-4">
            <div className="border-2 py-7">
              <h2 className="mb-2 text-center text-4xl font-bold italic">
                Classic Cuts
              </h2>
              <h3 className="text-center text-4xl">PRICE LIST</h3>
            </div>
          </div>
          <div className="border px-6 py-9">
            <ul className="flex w-full flex-col gap-2 text-xl font-bold md:text-2xl lg:text-xl xl:text-2xl">
              {SERVICES.map((service, index) => (
                <li
                  key={index}
                  className="flex after:order-1 after:mb-1 after:flex-1 after:border-b-2 after:border-dotted after:content-['']"
                >
                  <span>{service.value}</span>
                  <span className="order-2">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <RenderIf condition={showButton}>
            <Button asChild className="p-8 text-xl">
              <Link href="/booking">Book an appointment</Link>
            </Button>
          </RenderIf>
        </article>
      </div>
    </section>
  );
};
