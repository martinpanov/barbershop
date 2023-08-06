import Image from "next/image";
import { useState } from "react";
import { barberSchema } from "../Validations/FormValidation";
import { toast } from "react-hot-toast";

interface StepTwoProps {
    barberName: string;
    setBarberName: React.Dispatch<React.SetStateAction<string>>;
    stepHandler: (data: string) => void;
}

export default function BookingStepTwo({ barberName, setBarberName, stepHandler }: StepTwoProps) {
    const [isValid, setIsValid] = useState(true);

    const barberHandler = (barberName: string) => {
        setIsValid(true);
        setBarberName(barberName);
    };

    const validateAndNextStep = async () => {
        try {
            await barberSchema.validate(barberName);
            setIsValid(true);
            stepHandler("+");
        } catch (error: any) {
            toast.error(error.errors[0], { duration: 4000, position: 'top-center' });
            return setIsValid(false);
        }
    };


    return (
        <>
            <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Barber</span>
            <div className="flex flex-col items-center gap-5 p-5">
                <div onClick={() => barberHandler("Michael")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barberName === "Michael" ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                    <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                        <Image width={360} height={360} src="/barber1.jpg" alt="barber" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm text-black sm:text-base">Michael</span>
                </div>
                <div onClick={() => barberHandler("Josh")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barberName === "Josh" ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                    <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                        <Image width={360} height={360} src="/barber2.jpg" alt="barber" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm text-black sm:text-base">Josh</span>
                </div>
                <div onClick={() => barberHandler("Mitchel")} className={`flex items-center w-full gap-3 p-5 lg:cursor-pointer bg-white shadow-xl ${barberName === "Mitchel" ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                    <div className="overflow-hidden rounded-full w-14 h-14 sm:w-20 sm:h-20">
                        <Image width={360} height={360} src="/barber3.jpg" alt="barber" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm text-black sm:text-base">Mitchel</span>
                </div>
                <div className="flex items-center justify-center w-full gap-5 p-5 border-t sm:gap-20 border-opacity-10 border-neutral-950">
                    <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                    <button onClick={() => validateAndNextStep()} className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </div>
        </>
    );
}