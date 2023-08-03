import Image from "next/image";
import { locationSchema } from "../Validations/FormValidation";
import { useState } from "react";

interface StepOneProps {
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    stepHandler: (data: string) => void;
}

export default function BookingStepOne({ location, setLocation, stepHandler }: StepOneProps) {
    const [isValid, setIsValid] = useState(true);

    const locationHandler = (location: string) => {
        setIsValid(true);
        setLocation(location);
    };

    const validateAndNextStep = async () => {
        const isLocationDataValid = await locationSchema.isValid(location);
        console.log(isLocationDataValid);

        if (!isLocationDataValid) {
            return setIsValid(false);
        } else {
            setIsValid(true);
        }

        stepHandler("+");
    };

    return (
        <>
            <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Location</span>
            <div className="flex flex-col items-center gap-5 p-5">
                <div onClick={() => locationHandler("2100 PALOS VERDES DR LOMITA CA")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${location === "2100 PALOS VERDES DR LOMITA CA" ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                    <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                        <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm text-black sm:text-base">2100 PALOS VERDES DR LOMITA CA</span>
                </div>
                <div onClick={() => locationHandler("9500 SAINT ANDREWS DR SANTEE CA")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${location === "9500 SAINT ANDREWS DR SANTEE CA" ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                    <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                        <Image width={360} height={360} src="/barbershop-outside.jpg" alt="barbershop" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm text-black sm:text-base">9500 SAINT ANDREWS DR SANTEE CA</span>
                </div>
                <div className="flex items-center justify-center w-full gap-5 p-5 border-t sm:gap-20 border-opacity-10 border-neutral-950">
                    <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                    <button onClick={() => validateAndNextStep()} className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </div>
        </>
    );
}