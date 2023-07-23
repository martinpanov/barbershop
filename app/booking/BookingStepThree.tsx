interface StepThreeProps {
    service: string;
    setService: React.Dispatch<React.SetStateAction<string>>;
}

export default function BookingStepThree({ setService, service }: StepThreeProps) {
    const serviceHandler = (service: string) => {
        setService(service);
    };

    return (
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
    );
}