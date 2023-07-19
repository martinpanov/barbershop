"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <header className="absolute z-50 flex items-center justify-between w-full bg-transparent sm:justify-center">
            {openMobileNav ?
                <>
                    <div className="fixed top-0 w-full h-screen bg-black bg-opacity-90">
                        <div className="flex items-center justify-end w-full h-28">
                            <FontAwesomeIcon
                                icon={faX}
                                className="pr-8 text-4xl sm:hidden"
                                onClick={() => setOpenMobileNav(false)}
                            />
                        </div>
                        <ul className="flex flex-col items-center justify-center gap-5 text-3xl h-4/5">
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
                            <li>
                                <Link href="/booking">Booking</Link>
                            </li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <Link href="/">
                        <Image width={192} height={144} src="/logo-2.png" alt="logo" className="object-cover w-40 h-28 sm:w-48 sm:h-36" />
                    </Link>

                    <FontAwesomeIcon
                        icon={faBars}
                        className="pr-8 text-4xl sm:hidden"
                        onClick={() => setOpenMobileNav(true)}
                    />
                </>
            }

            <ul className="hidden sm:flex sm:items-center sm:justify-center sm:gap-3 md:gap-7 sm:text-base md:text-lg">
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
                    <Link className="bg-transparent border border-golden md:py-3.5 md:px-7.5 sm:py-2 sm:px-6 ease-in duration-300 cursor-pointer text-golden hover:bg-golden hover:text-slate-100" href="/booking">Book now</Link>
                </li>
            </ul>
        </header>
    );
}