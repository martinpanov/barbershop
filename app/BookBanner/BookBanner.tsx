import Link from "next/link";
import Image from "next/image";

export default function BookBanner() {
    return (
        <section className="relative flex items-center justify-center mt-32 h-96 md:h-[32rem] after:absolute after:top-0 after:left-0 after:bg-golden after:w-full after:h-full after:opacity-50">
            <Image quality={100} fill={true} src="/barber-accessories.jpg" alt="barber-accessories" className="object-cover" />
            <div className="absolute z-10 flex flex-col items-center gap-4 text-center">
                <h2 className="text-4xl italic font-bold text-center sm:text-5xl font-playfair">Unleash Your Best Look</h2>
                <p className="text-lg font-roboto">Expert grooming for your unique style. Redefine yourself with our skilled barbers. Elevate your presence.</p>
                <Link href='booking' className="inline-block px-10 py-5 mx-auto my-0 text-lg font-bold bg-transparent border-2 border-white lg:hover:bg-white lg:duration-200 lg:ease-in lg:hover:text-golden">Book an appointment</Link>
            </div>
        </section>
    );
}