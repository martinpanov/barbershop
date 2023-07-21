
interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

interface StepFiveProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function BookingStepFive({ setFormData, formData }: StepFiveProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    return (
        <>
            <span className="block p-5 text-lg text-black border-b border-opacity-10 border-neutral-950">Enter Your Details</span>
            <form className="flex flex-col p-5 text-lg text-black">
                <label htmlFor="firstName">First Name:</label>
                <input className="p-1 mb-3 text-lg" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input className="p-1 mb-3 text-lg" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input className="p-1" type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </form>
        </>
    );
}