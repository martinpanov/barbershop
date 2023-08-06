import { useState } from "react";
import { formSchema } from "../Validations/FormValidation";
import { toast } from "react-hot-toast";

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    date: string;
    time: string;
}

interface StepFourProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    stepHandler: (data: string) => void;
}

export default function BookingStepFour({ formData, setFormData, stepHandler }: StepFourProps) {
    const [isDatePicked, setIsDatePicked] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const formatDate = (date: string) => {
        const newDate = new Date(date);
        const day = newDate.getDate().toString().padStart(2, '0');
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const year = newDate.getFullYear();

        return `${month}/${day}/${year}`;
    };

    const validateAndNextStep = async () => {
        try {
            await formSchema.validate(formData, { abortEarly: false });

            setIsValid(true);

            stepHandler("+");
        } catch (error: any) {
            if (error.errors.length > 2) {
                toast.error('Please fill in the required fields', { duration: 4000, position: 'top-center' });
                return setIsValid(false);
            }
            error.errors.map((error: string) => toast.error(error, { duration: 4000, position: 'top-center' }));
            return setIsValid(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));

        if (name === "date") {
            const currentDate = new Date().toISOString().split("-");
            const currentYear = Number(currentDate[0]);
            const currentMonth = Number(currentDate[1]);
            const currentDay = Number(currentDate[2].split("T")[0]);

            const inputDate = value.split("-");
            const inputYear = Number(inputDate[0]);
            const inputMonth = Number(inputDate[1]);
            const inputDay = Number(inputDate[2]);

            // Doing this to check if the input date is older than today's date

            if (value === "") return setIsDatePicked(false);

            if (currentYear > inputYear) return setIsDatePicked(false);

            if (currentYear === inputYear && currentMonth > inputMonth) return setIsDatePicked(false);

            if (currentMonth === inputMonth && currentDay > inputDay) return setIsDatePicked(false);

            setIsDatePicked(true);
        }
    };

    const handleTimeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        setFormData(prevFormData => ({ ...prevFormData, time: value }));
    };

    return (
        <>
            <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Enter Your Details</span>
            <form className="flex flex-col p-5 text-lg text-black" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="firstName">First Name:</label>
                <input className={`p-1 mb-3 text-lg ${!isValid ? "border-red-600 border" : ""}`} type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input className={`p-1 mb-3 text-lg ${!isValid ? "border-red-600 border" : ""}`} type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input className={`p-1 mb-3 text-lg ${!isValid ? "border-red-600 border" : ""}`} type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                <label htmlFor="date">Date:</label>
                <input className={`p-1 mb-3 text-lg ${!isValid ? "border-red-600 border" : ""}`} type="date" id="date" name="date" min={new Date().toISOString().split("T")[0]} value={formData.date} onChange={handleChange} />
                {isDatePicked ?
                    <>
                        <div className="bg-white">
                            <span className="block p-5 text-lg text-center text-black border-b border-opacity-10 border-neutral-950">{formatDate(formData.date)}</span>
                            <div className="grid grid-cols-3 gap-3 p-3">
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "10:00" ? 'border-green-700 border' : null}`} value="10:00" onClick={handleTimeClick}>10:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "11:00" ? 'border-green-700 border' : null}`} value="11:00" onClick={handleTimeClick}>11:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "12:00" ? 'border-green-700 border' : null}`} value="12:00" onClick={handleTimeClick}>12:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "13:00" ? 'border-green-700 border' : null}`} value="13:00" onClick={handleTimeClick}>13:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "14:00" ? 'border-green-700 border' : null}`} value="14:00" onClick={handleTimeClick}>14:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "15:00" ? 'border-green-700 border' : null}`} value="15:00" onClick={handleTimeClick}>15:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "16:00" ? 'border-green-700 border' : null}`} value="16:00" onClick={handleTimeClick}>16:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "17:00" ? 'border-green-700 border' : null}`} value="17:00" onClick={handleTimeClick}>17:00</button>
                                <button type="button" className={`py-5 bg-slate-100 ${formData.time === "18:00" ? 'border-green-700 border' : null}`} value="18:00" onClick={handleTimeClick}>18:00</button>
                            </div>
                        </div>
                    </>
                    : null
                }
                <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10 border-neutral-950">
                    <button onClick={() => stepHandler("-")} className="px-6 py-2 text-black bg-transparent border border-black lg:duration-200 lg:ease-in lg:hover:bg-black lg:hover:text-white lg:hover:border-transparent">Back</button>
                    <button onClick={() => validateAndNextStep()} className="px-6 py-3 text-black border bg-golden">Next Step</button>
                </div>
            </form>
        </>
    );
};