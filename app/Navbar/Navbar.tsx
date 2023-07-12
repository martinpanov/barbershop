import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <header className="bg-transparent absolute z-50 w-screen flex items-center justify-between sm:justify-center">
            <Link href="/">
                <Image width={192} height={144} src="/logo-2.png" alt="logo" className="w-40 h-28 sm:w-48 sm:h-36 object-cover" />
            </Link>

            <FontAwesomeIcon
                icon={faBars}
                className="text-4xl pr-8 sm:hidden"
            />

            <ul className="hidden sm:flex justify-center items-center gap-7 text-lg">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="/saloons">Saloons</Link>
                </li>
                <li>
                    <Link href="/academy">Academy</Link>
                </li>
                <li className="bg-transparent border border-yellow-600 py-4 px-8 ease-in duration-300 cursor-pointer text-yellow-600 hover:bg-yellow-600 hover:text-slate-100 hover:">
                    <Link href="/booking">Book now</Link>
                </li>
            </ul>
        </header>
    );
}