import Image from "next/image";
import BookingForm from "./BookingForm";

export const metadata = {
    title: "Booking",
    description: "Page where you can book an appointment"
};

export default function BookingPage() {
    return (
        <>
            <section className="h-[50vh] relative">
                <h1 className="absolute z-10 text-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-playfair">Booking</h1>
                <Image quality={100} fill={true} priority={true} src="/booking-img.jpg" alt="booking" className="object-cover w-full h-full opacity-50" />
            </section>

            <BookingForm />
        </>
    );
}