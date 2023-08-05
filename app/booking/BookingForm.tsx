"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingStepOne from "./BookingStepOne";
import BookingStepTwo from "./BookingStepTwo";
import BookingStepThree from "./BookingStepThree";
import BookingStepFour from "./BookingStepFour";
import ThankYou from "./ThankYou";
import toast from 'react-hot-toast';

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [location, setLocation] = useState("");
    const [barberName, setBarberName] = useState("");
    const [service, setService] = useState("");
    const [formData, setFormData] = useState({ firstName: "", lastName: "", phoneNumber: "", date: "", time: "" });

    const stepHandler = async (type: string) => {
        if (type === "+") {
            setCompletedSteps(prevState => [...prevState, step]);
            setStep(prevState => prevState + 1);
        } else if (type === "-") {
            if (step - 1 === 0) {
                return;
            }

            setCompletedSteps(prevState =>
                [...prevState.filter(e => e + 1 !== step)]
            );

            setStep(prevState => prevState - 1);


            if (step - 1 === 1) {
                setBarberName("");
            }
        }
    };

    const handleSubmit = async () => {
        try {
            const loading = toast.loading('Loading...');

            const response = await fetch('/api/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location, barberName, service, ...formData })
            });

            if (!response.ok) {
                throw new Error('Something went wrong, please try again later');
            }

            toast.dismiss(loading);

            toast.success('Your appointment has been made!', { duration: 4000 });

            setLocation('');
            setBarberName('');
            setService('');
            setFormData({ firstName: "", lastName: "", phoneNumber: "", date: "", time: "" });
            setIsSubmitted(true);
        } catch (error) {
            if (error instanceof SyntaxError) {
                toast.error(`JSON Parsing Error: ${error}`, { duration: 4000 });
            } else {
                toast.error(`Network Error: ${error}`, { duration: 4000 });
            }
        }
    };

    return (
        <>
            {isSubmitted ? <ThankYou /> :
                <div className="w-11/12 md:max-w-5xl lg:flex font-roboto">
                    <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-8 bg-neutral-800 lg:justify-start lg:px-5 lg:gap-10">
                        <div className="h-24 w-44">
                            <Link href="/">
                                <Image width={360} height={360} src="/logo-2.png" alt="logo" className="object-cover w-full h-full" />
                            </Link>
                        </div>
                        <ul className="hidden lg:flex lg:flex-col lg:gap-7">
                            <li>
                                <span className={`mr-2 px-2.5 py-1 rounded-full ${!completedSteps.includes(1) && step !== 1 ? "bg-neutral-600" : ""} ${step === 1 ? "bg-green-400" : ""} ${completedSteps.includes(1) ? "bg-purple-950" : ""}`}>1</span>
                                <span>Location</span>
                            </li>
                            <li>
                                <span className={`mr-2 px-2.5 py-1 rounded-full ${!completedSteps.includes(2) && step !== 2 ? "bg-neutral-600" : ""} ${step === 2 ? "bg-green-400" : ""} ${completedSteps.includes(2) ? "bg-purple-950" : ""}`}>2</span>
                                <span>
                                    Barber
                                </span>
                            </li>
                            <li>
                                <span className={`mr-2 px-2.5 py-1 rounded-full ${!completedSteps.includes(3) && step !== 3 ? "bg-neutral-600" : ""} ${step === 3 ? "bg-green-400" : ""} ${completedSteps.includes(3) ? "bg-purple-950" : ""}`}>3</span>
                                <span>
                                    Services
                                </span>
                            </li>
                            <li>
                                <span className={`mr-2 px-2.5 py-1 rounded-full ${!completedSteps.includes(4) && step !== 4 ? "bg-neutral-600" : ""} ${step === 4 ? "bg-green-400" : ""} ${completedSteps.includes(4) ? "bg-purple-950" : ""}`}>4</span>
                                <span>
                                    Date And Time
                                </span>
                            </li>
                            <li>
                                <span className={`mr-2 px-2.5 py-1 rounded-full ${!completedSteps.includes(5) && step !== 5 ? "bg-neutral-600" : ""} ${step === 5 ? "bg-green-400" : ""} ${completedSteps.includes(5) ? "bg-purple-950" : ""}`}>5</span>
                                <span>
                                    Summary
                                </span>
                            </li>
                        </ul>

                        <ul className="flex gap-3 lg:hidden">
                            <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(1) && step !== 1 ? "bg-neutral-600" : ""} ${step === 1 ? "bg-green-400" : ""} ${completedSteps.includes(1) ? "bg-purple-950" : ""}`}>1</li>
                            <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(2) && step !== 2 ? "bg-neutral-600" : ""} ${step === 2 ? "bg-green-400" : ""} ${completedSteps.includes(2) ? "bg-purple-950" : ""}`}>2</li>
                            <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(3) && step !== 3 ? "bg-neutral-600" : ""} ${step === 3 ? "bg-green-400" : ""} ${completedSteps.includes(3) ? "bg-purple-950" : ""}`}>3</li>
                            <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(4) && step !== 4 ? "bg-neutral-600" : ""} ${step === 4 ? "bg-green-400" : ""} ${completedSteps.includes(4) ? "bg-purple-950" : ""}`}>4</li>
                            <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(5) && step !== 5 ? "bg-neutral-600" : ""} ${step === 5 ? "bg-green-400" : ""} ${completedSteps.includes(5) ? "bg-purple-950" : ""}`}>5</li>
                        </ul>
                    </div>
                    <div className="w-full bg-slate-100">
                        <>
                            {step === 1 &&
                                <BookingStepOne location={location} setLocation={setLocation} stepHandler={stepHandler} />
                            }

                            {step === 2 &&
                                <BookingStepTwo barberName={barberName} setBarberName={setBarberName} stepHandler={stepHandler} />
                            }

                            {step === 3 &&
                                <BookingStepThree service={service} setService={setService} stepHandler={stepHandler} />
                            }

                            {step === 4 &&
                                <BookingStepFour formData={formData} setFormData={setFormData} stepHandler={stepHandler} />
                            }

                            {step === 5 &&
                                <>
                                    <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Summary</span>

                                    <form className="flex flex-col p-5 text-lg text-black" onSubmit={(e) => e.preventDefault()}>
                                        <label htmlFor="firstName">First Name:</label>
                                        <input className="p-1 mb-3 text-lg" type="text" id="firstName" name="firstName" value={formData.firstName} readOnly />
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input className="p-1 mb-3 text-lg" type="text" id="lastName" name="lastName" value={formData.lastName} readOnly />
                                        <label htmlFor="phoneNumber">Phone Number:</label>
                                        <input className="p-1 mb-3 text-lg" type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} readOnly />
                                        <label htmlFor="date">Date:</label>
                                        <input className="p-1 mb-3 text-lg" type="date" id="date" name="date" value={formData.date} readOnly />
                                        <label htmlFor="time">Time:</label>
                                        <input className="p-1 mb-3 text-lg" type="time" id="time" name="time" value={formData.time} readOnly />
                                        <label htmlFor="location">Location:</label>
                                        <input className="p-1 mb-3 text-lg" type="location" id="location" name="location" value={location} readOnly />
                                        <label htmlFor="barber">Barber:</label>
                                        <input className="p-1 mb-3 text-lg" type="barber" id="barber" name="barber" value={barberName} readOnly />
                                        <label htmlFor="service">Service:</label>
                                        <input className="p-1 mb-3 text-lg" type="service" id="service" name="service" value={service} readOnly />
                                    </form>

                                    <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10 border-neutral-950">
                                        <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                                        <button onClick={() => handleSubmit()} className="px-6 py-3 text-black border bg-golden">Submit</button>
                                    </div>
                                </>
                            }
                        </>

                    </div>
                </div>
            }
        </>
    );
}