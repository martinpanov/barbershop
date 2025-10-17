import Image from "next/image";
import { RenderIf } from "../RenderIf";
import { Button } from "../ui/button";
import Link from "next/link";

type HeaderProps = {
  title: string;
  imageName: string;
  fullScreen?: boolean;
  showButton?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ title, imageName, fullScreen, showButton }) => {
  const headerSize = fullScreen ? "h-screen" : "h-[50vh]";
  return (
    <section className={`relative ${headerSize} overflow-hidden`}>
      <Image
        quality={100}
        priority={true}
        fill={true}
        src={`/${imageName}.webp`}
        alt={imageName}
        className="absolute object-cover w-full h-full blur-xs opacity-50"
      />
      <div className="absolute flex flex-col items-center max-w-3xl gap-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-3xl italic font-bold text-center sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <RenderIf condition={showButton}>
          <Button asChild className="p-8 text-xl">
            <Link href="/booking">
              Book an appointment
            </Link>
          </Button>
        </RenderIf>
      </div>
    </section>
  );
};