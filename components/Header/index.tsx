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

export const Header: React.FC<HeaderProps> = ({
  title,
  imageName,
  fullScreen,
  showButton,
}) => {
  const headerSize = fullScreen ? "h-screen" : "h-[50vh]";
  return (
    <section className={`relative ${headerSize} overflow-hidden`}>
      <Image
        quality={100}
        priority={true}
        fill={true}
        src={`/${imageName}.webp`}
        alt={imageName}
        className="absolute h-full w-full object-cover opacity-50 blur-xs"
      />
      <div className="absolute top-1/2 left-1/2 flex max-w-3xl -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-8">
        <h1 className="text-center text-3xl font-bold italic sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <RenderIf condition={showButton}>
          <Button asChild className="p-8 text-xl">
            <Link href="/booking">Book an appointment</Link>
          </Button>
        </RenderIf>
      </div>
    </section>
  );
};
