import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <ul className="flex justify-center items-center gap-7 text-lg">
                <li>
                    <Link href="/">
                        <img src="/logo.png" alt="logo" className="w-48 h-36 object-cover" />
                    </Link>
                </li>
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
                <li className="bg-transparent border py-4 px-8">
                    <Link href="/booking">Book now</Link>
                </li>
            </ul>
        </header>
    );
}