import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-transparent absolute z-50 w-screen">
            <ul className="flex justify-center items-center gap-7 text-lg">
                <li>
                    <Link href="/">
                        <img src="/logo-2.png" alt="logo" className="w-48 h-36 object-cover" />
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
                <li className="bg-transparent border border-yellow-600 py-4 px-8 ease-in duration-300 cursor-pointer text-yellow-600 hover:bg-yellow-600 hover:text-slate-100 hover:">
                    <Link href="/booking">Book now</Link>
                </li>
            </ul>
        </header>
    );
}