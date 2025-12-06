import { Metadata } from "next";
import React from "react";

import { Header } from "@/components/Header";

import BookingForm from "./components/BookingForm";

export const metadata: Metadata = {
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
