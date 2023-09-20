import Image from "next/image";
import { faLocationDot, faClock, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookBanner from "../BookBanner/BookBanner";

export const metadata = {
    title: "Saloons",
    description: "Page which gives information about the saloons"
};

export default function SaloonsPage() {
    return (
        <>
            <section className="h-[50vh] relative">
                <h1 className="absolute z-10 text-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-playfair">Saloons</h1>
                <Image quality={100} priority={true} fill={true} src="/saloon.jpg" alt="saloon" className="object-cover w-full h-full opacity-50" />
            </section>
            <section className="flex flex-col items-center gap-10 py-10">
                <h2 className="text-4xl text-center font-playfair md:text-5xl">Classic Cuts Barbershop One</h2>
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                    <div className="w-80 lg:w-96">
                        <Image quality={100} priority={true} width={384} height={255} src="/barbershop-one.jpg" alt="barbershop-one" className="object-cover w-full h-full" />
                    </div>
                    <ul className="flex flex-col gap-3 px-4 text-xl font-roboto">
                        <li>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-3xl md:text-2xl text-golden"
                            /> 2100 PALOS VERDES DR LOMITA CA
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-2xl text-golden"
                            /> Monday - Saturday: 10:00 - 19:00
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-2xl text-golden"
                            /> Sunday: 10:00 - 16:00
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faPhoneVolume}
                                className="text-2xl text-golden"
                            /> &#40;509&#41; 786-4500
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-2xl text-golden"
                            /> random@random.com
                        </li>
                    </ul>
                </div>
                <iframe src="https://storage.googleapis.com/maps-solutions-pv5ov7nwxl/locator-plus/ir3x/locator-plus.html"
                    className="w-full border-0 h-96 lg:h-[30vw] max-w-7xl"
                    loading="lazy">
                </iframe>
            </section>
            <section className="flex flex-col items-center gap-10 py-10">
                <h2 className="text-4xl text-center md:text-5xl font-playfair">Classic Cuts Barbershop Two</h2>
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row-reverse">
                    <div className="w-80 lg:w-96">
                        <Image quality={100} width={384} height={255} src="/barbershop-one.jpg" alt="barbershop-one" className="object-cover w-full h-full" />
                    </div>
                    <ul className="flex flex-col gap-3 px-4 text-xl font-roboto">
                        <li>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-3xl md:text-2xl text-golden"
                            /> 9500 SAINT ANDREWS DR SANTEE CA
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-2xl text-golden"
                            /> Monday - Saturday: 10:00 - 19:00
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-2xl text-golden"
                            /> Sunday: 10:00 - 16:00
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faPhoneVolume}
                                className="text-2xl text-golden"
                            /> &#40;509&#41; 786-4500
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-2xl text-golden"
                            /> random@random.com
                        </li>
                    </ul>
                </div>
                <iframe src="https://storage.googleapis.com/maps-solutions-pv5ov7nwxl/locator-plus/hor6/locator-plus.html"
                    className="w-full border-0 h-96 lg:h-[30vw] max-w-7xl"
                    loading="lazy">
                </iframe>
            </section>

            <BookBanner />
        </>
    );
}