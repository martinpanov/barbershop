import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BookBanner() {
  return (
    <section className="relative flex h-[32rem] items-center justify-center overflow-hidden">
      <Image
        quality={100}
        fill
        src="/barber-accessories.webp"
        alt="barber-accessories"
        className="object-cover blur-xs"
      />
      <div className="absolute z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-center text-4xl font-bold italic sm:text-5xl">
          Unleash Your Best Look
        </h2>
        <p className="text-lg">
          Expert grooming for your unique style. Redefine yourself with our
          skilled barbers. Elevate your presence.
        </p>
        <Button asChild className="p-8 text-xl">
          <Link href="/booking">Book an appointment</Link>
        </Button>
      </div>
    </section>
  );
}
