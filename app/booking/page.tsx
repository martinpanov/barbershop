import BookingForm from "./components/BookingForm";
import React from "react";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Booking",
  description: "Page where you can book an appointment",
};

export default function BookingPage() {
  return (
    <React.Fragment>
      <Header title="Booking" imageName="booking-img" />
      <BookingForm />
    </React.Fragment>
  );
}
