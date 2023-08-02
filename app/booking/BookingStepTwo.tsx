import Image from "next/image";

interface StepTwoProps {
    barberName: string;
    setBarberName: React.Dispatch<React.SetStateAction<string>>;
}

export default function BookingStepTwo({ setBarberName: setBarberName, barberName: barber }: StepTwoProps) {
    const barberHandler = (barberName: string) => {
        setBarberName(barberName);
    };

    return (
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
    );
}