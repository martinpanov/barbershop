import Image from "next/image";
import { services } from "../util/services";
import BookBanner from "../BookBanner/BookBanner";

export const metadata = {
    title: "Services",
    description: "Page about our services"
};

export default function ServicesPage() {
    const serviceArticles = [{
        imageName: 'scissors-golden',
        service: 'Haircuts',
        serviceDetails: 'Experience the art of personalized haircuts with our skilled barbers. We carefully craft haircuts tailored to your style, ensuring you leave feeling confident and looking impeccable. Unleash your best look today!'
    }, {
        imageName: 'razor-golden',
        service: 'Shaving',
        serviceDetails: 'Indulge in the ultimate relaxation with our expertly tailored and sophisticated shaving services. Let our skilled barbers pamper you with precision and the finest grooming experience, leaving you rejuvenated and refined.'
    }, {
        imageName: 'massage-golden',
        service: 'Massages',
        serviceDetails: 'Indulge in the epitome of relaxation with our revitalizing barber massages. Experience the skilled hands of our barbers as they soothe and rejuvenate your body and mind, leaving you refreshed and invigorated.'
    }, {
        imageName: 'beard-golden',
        service: 'Beard Grooming',
        serviceDetails: 'Discover the art of beard refinement through our meticulous grooming expertise. Our skilled barbers shape, trim, and nourish your beard, creating a polished and stylish look that complements your individuality perfectly.'
    }];

    const barbers = [{
        name: 'Michael',
        experience: 'Junior Barber'
    }, {
        name: 'Josh',
        experience: 'Master Barber'
    }, {
        name: 'Mitchel',
        experience: 'Senior Barber'
    }];

    return (
        <>
            <section className="h-[50vh] relative">
                <h1 className="absolute z-10 text-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-playfair">Services</h1>
                <Image quality={100} priority={true} fill={true} src="/services-hero.jpg" alt="services-hero" className="object-cover w-full h-full opacity-50" />
            </section>

            <section className="flex justify-center px-10 pt-10 pb-32 xl:px-0">
                <div className="flex flex-col gap-11 lg:max-w-7xl">
                    <h2 className="mb-10 text-4xl italic font-bold text-left font-playfair"><span className="underline underline-offset-8 decoration-1">Our servi</span>ces</h2>
                    {serviceArticles.map((article, index) => {
                        return (
                            <article key={index} className="flex flex-col items-center gap-5 px-3 py-6 border shadow-xl lg:w-full lg:max-w-6xl md:flex-row xl:ease-in xl:hover:border-white xl:duration-300">
                                <Image quality={100} width={128} height={128} src={`/${article.imageName}.png`} alt={article.imageName} className="w-32 h-32" />
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold">{article.service}</h3>
                                    <p className="text-lg">{article.serviceDetails}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="py-10 lg:px-10">
                <h2 className="mb-20 text-4xl italic font-bold text-center font-playfair"><span className="underline underline-offset-8 decoration-1">Our barb</span>ers</h2>
                <div className="flex flex-col items-center gap-24 lg:justify-center lg:flex-row font-roboto">
                    {barbers.map(({ name, experience }, index) => (
                        <article key={name} className="relative w-80 h-96">
                            <Image width={320} height={384} src={`/barber${index + 1}.jpg`} alt="barber" className="absolute object-cover w-full h-full" />
                            <div className="absolute bottom-0 left-0 z-10 flex flex-col items-center w-full bg-[#000000db]">
                                <h3 className="text-xl font-bold">{name}</h3>
                                <p>{experience}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="flex justify-center px-10 py-32 bg-brown xl:px-0">
                <article className="flex flex-col w-full gap-3 lg:max-w-6xl">
                    <div className="p-4 bg-golden">
                        <div className="border-2 border-black bg-golden py-7">
                            <h2 className="mb-2 text-4xl italic font-bold text-center font-playfair">Classic Cuts</h2>
                            <h3 className="text-4xl text-center font-playfair">PRICE LIST</h3>
                        </div>
                    </div>
                    <div className="px-6 border py-9 border-golden">
                        <ul className="flex flex-col w-full gap-2 text-xl font-bold md:text-2xl lg:text-xl xl:text-2xl">
                            {services.map(({ name, price }) => <li key={name} className="flex after:content-[''] after:mb-1 after:border-b-2 after:border-dotted after:order-1 after:flex-1"><span>{name}</span><span className="order-2">{price}</span></li>)}
                        </ul>
                    </div>
                </article>
            </section>

            <BookBanner />
        </>
    );
}