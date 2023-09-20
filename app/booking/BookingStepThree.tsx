import { useState } from "react";
import { serviceSchema } from "../Validations/FormValidation";
import { toast } from "react-hot-toast";
import { services } from "../util/services";

interface StepThreeProps {
    service: string;
    setService: React.Dispatch<React.SetStateAction<string>>;
    stepHandler: (data: string) => void;
}

export default function BookingStepThree({ service, setService, stepHandler }: StepThreeProps) {
    const [isValid, setIsValid] = useState(true);

    const serviceHandler = (service: string) => {
        setIsValid(true);
        setService(service);
    };

    const validateAndNextStep = async () => {
        try {
            await serviceSchema.validate(service);
            setIsValid(true);
            stepHandler("+");
        } catch (error: any) {
            toast.error(error.errors[0], { duration: 4000, position: 'top-center' });
            return setIsValid(false);
        }
    };

    return (
        <>
            <h3 className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Choose Service</h3>
            <div className="grid grid-cols-2 gap-3 p-5">
                {services.map(({ name, price }) => (
                    <div key={name} onClick={() => serviceHandler(name)} className={`flex items-center w-full justify-between p-5 lg:cursor-pointer bg-white shadow-xl ${service === name ? "border-green-700 border" : ""} ${!isValid ? "border-red-600 border" : ""}`}>
                        <span className="text-sm text-black sm:text-base">{name}</span>
                        <span className="text-sm text-black sm:text-base">{price}</span>
                    </div>
                ))}
                <div className="flex justify-center col-span-2 gap-5 p-5 border-t sm:gap-20 border-opacity-10 border-neutral-950">
                    <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                    <button onClick={() => validateAndNextStep()} className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </div>
        </>
    );
}