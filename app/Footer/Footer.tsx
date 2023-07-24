import Image from "next/image";
import Link from "next/link";
import { faLocationDot, faClock, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center px-5 py-10">
            <div className="flex flex-col gap-10 md:gap-36 md:items-center md:flex-row">
                <div className="w-full h-40 overflow-hidden md:h-96 md:w-64">
                    <Link href="/">
                        <Image width={360} height={360} src='/logo-2.png' alt="logo" className="object-cover w-full h-full" />
                    </Link>
                </div>
                <ul className="flex flex-col gap-2 text-lg">
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/saloons">Saloons</Link>
                    </li>
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/academy">Academy</Link>
                    </li>
                    <li>
                        <Link className="duration-200 ease-in hover:text-golden" href="/booking">Book now</Link>
                    </li>
                </ul>
                <ul className="flex flex-col gap-2 text-lg">
                    <li>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-xl md:text-2xl text-golden"
                        /> 2100 PALOS VERDES DR LOMITA CA
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-xl md:text-2xl text-golden"
                        /> 9500 SAINT ANDREWS DR SANTEE CA
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faClock}
                            className="text-lg text-golden"
                        /> Monday - Saturday: 10:00 - 19:00
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faClock}
                            className="text-lg text-golden"
                        /> Sunday: 10:00 - 16:00
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            className="text-lg text-golden"
                        /> &#40;509&#41; 786-4500
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-lg text-golden"
                        /> random@random.com
                    </li>
                </ul>
            </div>
        </footer>
    );
}
