import Image from "next/image";

interface StepOneProps {
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export default function BookingStepOne({ setLocation, location }: StepOneProps) {
    const locationHandler = (location: string) => {
        setLocation(location);
    };

    return (
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
    );
}