"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [isCompletedStep, setIsCompletedStep] = useState<number[]>([]);
    const [location, setLocation] = useState("");
    const [barber, setBarber] = useState("");
    const [service, setService] = useState("");

    const stepHandler = (type: string) => {
        if (type === "+") {
            if (step === 1 && location === "") {
                return;
            }

            if (step === 2 && barber === "") {
                return;
            }

            setIsCompletedStep(prevState => [...prevState, step]);

            setStep(prevState => prevState + 1);
        } else if (type === "-") {
            setIsCompletedStep(prevState =>
                [...prevState.filter(e => e + 1 !== step)]
            );

            setStep(prevState => prevState - 1);


            if (step - 1 === 1) {
                setBarber("");
            }
        }
    };

    const locationHandler = (location: string) => {
        setLocation(location);
    };

    const barberHandler = (barber: string) => {
        setBarber(barber);
    };

    const serviceHandler = (service: string) => {
        setService(service);
    };

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
                    <li className={`px-3 py-1 rounded-full ${!isCompletedStep.includes(1) && step !== 1 ? "bg-neutral-600" : ""} ${step === 1 ? "bg-green-400" : ""} ${isCompletedStep.includes(1) ? "bg-purple-950" : ""}`}>1</li>
                    <li className={`px-3 py-1 rounded-full ${!isCompletedStep.includes(2) && step !== 2 ? "bg-neutral-600" : ""} ${step === 2 ? "bg-green-400" : ""} ${isCompletedStep.includes(2) ? "bg-purple-950" : ""}`}>2</li>
                    <li className={`px-3 py-1 rounded-full ${!isCompletedStep.includes(3) && step !== 3 ? "bg-neutral-600" : ""} ${step === 3 ? "bg-green-400" : ""} ${isCompletedStep.includes(3) ? "bg-purple-950" : ""}`}>3</li>
                    <li className={`px-3 py-1 rounded-full ${!isCompletedStep.includes(4) && step !== 4 ? "bg-neutral-600" : ""} ${step === 4 ? "bg-green-400" : ""} ${isCompletedStep.includes(4) ? "bg-purple-950" : ""}`}>4</li>
                </ul>
            </div>
            <div className="bg-slate-100">
                {step === 1 &&
                    <>
                        <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Location</span>
                        <div className="flex flex-col items-center gap-5 p-5">
                            <div onClick={() => locationHandler("2100 PALOS VERDES DR LOMITA CA")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${location === "2100 PALOS VERDES DR LOMITA CA" ? "border-green-700 border" : ""}`}>
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">2100 PALOS VERDES DR LOMITA CA</span>
                            </div>
                            <div onClick={() => locationHandler("9500 SAINT ANDREWS DR SANTEE CA")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${location === "9500 SAINT ANDREWS DR SANTEE CA" ? "border-green-700 border" : ""}`}>
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">9500 SAINT ANDREWS DR SANTEE CA</span>
                            </div>
                        </div>
                    </>
                }

                {step === 2 &&
                    <>
                        <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Barber</span>
                        <div className="flex flex-col items-center gap-5 p-5">
                            <div onClick={() => barberHandler("Michael")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barber === "Michael" ? "border-green-700 border" : ""}`}>
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barber1.jpg" alt="barber" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">Michael</span>
                            </div>
                            <div onClick={() => barberHandler("Josh")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barber === "Josh" ? "border-green-700 border" : ""}`}>
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barber2.jpg" alt="barber" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">Josh</span>
                            </div>
                            <div onClick={() => barberHandler("Mitchel")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barber === "Mitchel" ? "border-green-700 border" : ""}`}>
                                <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                                    <Image width={360} height={360} src="/barber3.jpg" alt="barber" className="object-cover w-full h-full" />
                                </div>
                                <span className="text-sm text-black sm:text-base">Mitchel</span>
                            </div>
                        </div>
                    </>
                }

                {step === 3 &&
                    <>
                        <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Service</span>
                        <div className="grid grid-cols-2 gap-3 p-5">
                            <div onClick={() => serviceHandler("Haircut")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Haircut" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Haircut</span>
                                <span className="text-sm text-black sm:text-base">$25</span>
                            </div>
                            <div onClick={() => serviceHandler("Beard Grooming")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Beard Grooming" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Beard Grooming</span>
                                <span className="text-sm text-black sm:text-base">$15</span>
                            </div>
                            <div onClick={() => serviceHandler("Haircut + Beard Grooming")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Haircut + Beard Grooming" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Haircut + Beard Grooming</span>
                                <span className="text-sm text-black sm:text-base">$35</span>
                            </div>
                            <div onClick={() => serviceHandler("Child Haircut")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Child Haircut" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Child Haircut</span>
                                <span className="text-sm text-black sm:text-base">$15</span>
                            </div>
                            <div onClick={() => serviceHandler("Haircut For Retiree")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Haircut For Retiree" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Haircut For Retiree</span>
                                <span className="text-sm text-black sm:text-base">$15</span>
                            </div>
                            <div onClick={() => serviceHandler("Head Massage")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Head Massage" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Head Massage</span>
                                <span className="text-sm text-black sm:text-base">$30</span>
                            </div>
                            <div onClick={() => serviceHandler("Hair Styling")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Hair Styling" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Hair Styling</span>
                                <span className="text-sm text-black sm:text-base">$20</span>
                            </div>
                            <div onClick={() => serviceHandler("Facial Treatment")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Facial Treatment" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Facial Treatment</span>
                                <span className="text-sm text-black sm:text-base">$40</span>
                            </div>
                            <div onClick={() => serviceHandler("Eyebrow Grooming")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Eyebrow Grooming" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Eyebrow Grooming</span>
                                <span className="text-sm text-black sm:text-base">$10</span>
                            </div>
                            <div onClick={() => serviceHandler("Grey Blending")} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === "Grey Blending" ? "border-green-700 border" : ""}`}>
                                <span className="text-sm text-black sm:text-base">Grey Blending</span>
                                <span className="text-sm text-black sm:text-base">$35</span>
                            </div>
                        </div>
                    </>

                }

                <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10 border-neutral-950">
                    <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                    <button onClick={() => stepHandler("+")} className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </div>
        </div>
    );
}