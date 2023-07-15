import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Home",
    description: "Home page"
};

export default function Home() {
    const serviceArticles = [{
        imageName: 'scissors',
        service: 'Haircuts',
        serviceDetails: 'Customized haircuts that match your style, delivered with precision.'
    }, {
        imageName: 'razor',
        service: 'Shaving',
        serviceDetails: 'Unwind with our expertly tailored, sophisticated shaving services.'
    }, {
        imageName: 'massage',
        service: 'Massages',
        serviceDetails: 'Indulge in ultimate relaxation with our revitalizing barber massages.'
    }, {
        imageName: 'beard',
        service: 'Beard Grooming',
        serviceDetails: 'Refine your beard with our meticulous grooming expertise.'
    }];

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
                    {serviceArticles.map((article, index) => {
                        return (
                            <article key={index} className="flex flex-col items-center justify-center w-56 gap-3 p-3 text-center border shadow-xl md:h-72 md:w-64 lg:w-52 xl:w-56 xl:ease-in xl:hover:border-white xl:duration-300">
                                <Image quality={100} width={86} height={86} src={`/${article.imageName}.png`} alt={article.imageName} />
                                <h3 className="text-2xl font-bold">{article.service}</h3>
                                <p className="text-lg">{article.serviceDetails}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="px-10 pt-10 pb-20">
                <h2 className="mx-auto mt-0 text-4xl italic font-bold text-center mb-11 sm:text-5xl"><span className="md:underline md:underline-offset-8 md:decoration-1">Showcasing Ou</span>r Masterful Work</h2>
                <div className="flex flex-wrap items-center justify-center gap-11 md:gap-2">
                    {[1, 2, 3, 4, 5].map(imageNumber => {
                        return <Image key={imageNumber} quality={100} width={120} height={120} src={`/haircut${imageNumber}.jpg`} alt="haircut" className="object-cover duration-300 ease-in w-80 h-96 hover:scale-110" />;
                    })}
                </div>
            </section>
        </>
    );
}
