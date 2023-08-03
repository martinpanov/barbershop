"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingStepOne from "./BookingStepOne";
import BookingStepTwo from "./BookingStepTwo";
import BookingStepThree from "./BookingStepThree";
import BookingStepFour from "./BookingStepFour";
import { barberSchema, formSchema, locationSchema, serviceSchema } from "../Validations/FormValidation";

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
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
            const isValid = await formSchema.isValid(formData);

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

            setLocation('');
            setBarberName('');
            setService('');
            setFormData({ firstName: "", lastName: "", phoneNumber: "", date: "", time: "" });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
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
                </ul>

                <ul className="flex gap-3 lg:hidden">
                    <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(1) && step !== 1 ? "bg-neutral-600" : ""} ${step === 1 ? "bg-green-400" : ""} ${completedSteps.includes(1) ? "bg-purple-950" : ""}`}>1</li>
                    <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(2) && step !== 2 ? "bg-neutral-600" : ""} ${step === 2 ? "bg-green-400" : ""} ${completedSteps.includes(2) ? "bg-purple-950" : ""}`}>2</li>
                    <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(3) && step !== 3 ? "bg-neutral-600" : ""} ${step === 3 ? "bg-green-400" : ""} ${completedSteps.includes(3) ? "bg-purple-950" : ""}`}>3</li>
                    <li className={`px-3 py-1 rounded-full ${!completedSteps.includes(4) && step !== 4 ? "bg-neutral-600" : ""} ${step === 4 ? "bg-green-400" : ""} ${completedSteps.includes(4) ? "bg-purple-950" : ""}`}>4</li>
                </ul>
            </div>
            <div className="w-full bg-slate-100">
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
                    <>
                        <BookingStepFour setFormData={setFormData} formData={formData} />
                        <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10 border-neutral-950">
                            <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                            <button onClick={() => handleSubmit()} className="px-6 py-3 text-black border bg-golden">Submit</button>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}