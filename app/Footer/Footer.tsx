import Image from "next/image";
import Link from "next/link";
import { faLocationDot, faClock, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center">
            <div className="flex items-center gap-36">
                <div className="overflow-hidden w-80 h-96">
                    <Link href="/">
                        <Image width={360} height={360} src='/logo-2.png' alt="logo" className="object-cover w-full h-full" />
                    </Link>
                </div>
                <ul className="flex flex-col gap-2 text-xl">
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/saloons">Saloons</Link>
                    </li>
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/academy">Academy</Link>
                    </li>
                    <li className="duration-200 ease-in hover:text-golden">
                        <Link href="/booking">Book now</Link>
                    </li>
                </ul>
                <ul className="flex flex-col gap-2 text-lg">
                    <li>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-3xl text-golden"
                        /> 2100 PALOS VERDES DR LOMITA CA
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-3xl text-golden"
                        /> 9500 SAINT ANDREWS DR SANTEE CA
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faClock}
                            className="text-2xl text-golden"
                        /> Monday - Saturday: 9:00 - 19:00
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faClock}
                            className="text-2xl text-golden"
                        /> Sunday: 9:00 - 16:00
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
        </footer>
    );
}
