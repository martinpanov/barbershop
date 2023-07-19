"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookingForm() {
    const [step, setStep] = useState(1);

    return (
        <div className="w-11/12 md:max-w-5xl">
            <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-8 bg-neutral-800">
                <div className="h-24 w-44">
                    <Link href="/">
                        <Image width={360} height={360} src="/logo-2.png" alt="logo" className="object-cover w-full h-full" />
                    </Link>
                </div>
                <ul className="hidden lg:flex">
                    <li><button>Location</button></li>
                    <li><button>Barber</button></li>
                    <li><button>Services</button></li>
                    <li><button>Date And Time</button></li>
                </ul>

                <ul className="flex gap-3 lg:hidden">
                    <li className={`px-3 py-1 bg-green-400 rounded-full ${step === 1 ? "bg-green-400" : ""} ${step - 1 === 1 ? "bg-purple-950" : ""}`}>1</li>
                    <li className={`px-3 py-1 bg-green-400 rounded-full ${step === 2 ? "bg-green-400" : ""} ${step - 1 === 2 ? "bg-purple-950" : ""}`}>2</li>
                    <li className={`px-3 py-1 bg-green-400 rounded-full ${step === 3 ? "bg-green-400" : ""} ${step - 1 === 3 ? "bg-purple-950" : ""}`}>3</li>
                    <li className={`px-3 py-1 bg-green-400 rounded-full ${step === 4 ? "bg-green-400" : ""} ${step - 1 === 4 ? "bg-purple-950" : ""}`}>4</li>
                </ul>
            </div>
            <div className="bg-slate-100">
                {step === 1 &&
                    <>
                        <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose location</span>
                        <div className="flex flex-col items-center p-5">
                            <div className="flex items-center w-full gap-3 p-5 mb-5 bg-white shadow-xl">
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">2100 PALOS VERDES DR LOMITA CA</span>
                            </div>
                            <div className="flex items-center w-full gap-3 p-5 mb-5 bg-white shadow-xl">
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">9500 SAINT ANDREWS DR SANTEE CA</span>
                            </div>
                        </div>
                    </>
                }
                <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10 border-neutral-950">
                    <button className="px-6 py-2 text-black duration-200 ease-in bg-transparent border border-black hover:bg-black hover:text-white hover:border-transparent">Back</button>
                    <button className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </div>
        </div>
    );
}