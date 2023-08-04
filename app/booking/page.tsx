import Image from "next/image";
import BookingForm from "./BookingForm";
import { useState } from "react";
import ThankYou from "./ThankYou";

export default function BookingPage() {
    return (
        <>
            <section className="h-[50vh] relative">
                <h1 className="absolute z-10 text-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-playfair">Booking</h1>
                <Image quality={100} src="/booking-img.jpg" alt="booking" width={1280} height={1920} className="object-cover w-full h-full opacity-50" />
            </section>

            <section className="flex items-center justify-center py-10 bg-white lg:py-20">
                <BookingForm />
            </section>
        </>
    );
}