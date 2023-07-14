import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Home",
    description: "Home page"
};

export default function Home() {
    return (
        <>
            <section className="h-screen">
                <Image fill={true} src="/hero-img.jpg" alt="hero-image" className="object-cover w-full h-full opacity-50" />
                <div className="absolute flex flex-col items-center w-4/5 max-w-3xl gap-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="text-3xl italic font-bold text-center sm:text-5xl md:text-6xl">Welcome to "Classic Cuts" - Where Style Meets Precision</h1>
                    <Link href='/booking' className="px-4 py-3 text-lg bg-golden sm:px-10 sm:py-5 sm:text-xl">Book an appointment</Link>
                </div>
            </section>

            <section className="flex justify-center pt-10 pb-20 bg-golden">
                <div className="flex flex-col items-center gap-11 max-w-7xl lg:grid lg:grid-cols-4 lg:place-items-center">
                    <h2 className="col-span-4 text-5xl italic font-bold text-center"><span className="underline underline-offset-8 decoration-1">Our servi</span>ces</h2>
                    <article className="flex flex-col items-center justify-center w-56 gap-3 p-3 text-center border shadow-xl md:h-72 md:w-64 lg:w-52 xl:w-56 xl:ease-in xl:hover:border-white xl:duration-300">
                        <Image quality={100} width={86} height={86} src="/scissors.png" alt="scissors" />
                        <h3 className="text-2xl font-bold">Haircuts</h3>
                        <p className="text-lg">Customized haircuts that match your style, delivered with precision.</p>
                    </article>
                    <article className="flex flex-col items-center justify-center w-56 gap-3 p-3 text-center border shadow-xl md:h-72 md:w-64 lg:w-52 xl:w-56 xl:ease-in xl:hover:border-white xl:duration-300">
                        <Image quality={100} width={86} height={86} src="/razor.png" alt="razor" />
                        <h3 className="text-2xl font-bold">Shaving</h3>
                        <p className="text-lg">Unwind with our expertly tailored, sophisticated shaving services.</p>
                    </article>
                    <article className="flex flex-col items-center justify-center w-56 gap-3 p-3 text-center border shadow-xl md:h-72 md:w-64 lg:w-52 xl:w-56 xl:ease-in xl:hover:border-white xl:duration-300">
                        <Image quality={100} width={86} height={86} src="/massage.png" alt="massage" />
                        <h3 className="text-2xl font-bold">Massages</h3>
                        <p className="text-lg">Indulge in ultimate relaxation with our revitalizing barber massages.</p>
                    </article>
                    <article className="flex flex-col items-center justify-center w-56 gap-3 p-3 text-center border shadow-xl md:h-72 md:w-64 lg:w-52 xl:w-56 xl:ease-in xl:hover:border-white xl:duration-300">
                        <Image quality={100} width={86} height={86} src="/beard.png" alt="beard" />
                        <h3 className="text-2xl font-bold">Beard Grooming</h3>
                        <p className="text-lg">Refine your beard with our meticulous grooming expertise.</p>
                    </article>
                </div>
            </section>
        </>
    );
}
