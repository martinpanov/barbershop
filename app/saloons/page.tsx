import BookBanner from "../../components/BookBanner";
import React from "react";
import { Header } from "@/components/Header";
import { BarberShopDetails } from "./components/BarberShopDetails";

export const metadata = {
  title: "Saloons",
  description: "Page which gives information about the saloons",
};

export default function SaloonsPage() {
  return (
    <React.Fragment>
      <Header title="Saloons" imageName="saloon" />
      <BarberShopDetails
        barberShopName="Classic Cuts Barbershop One"
        street="2100 PALOS VERDES DR LOMITA CA"
        workTime="Monday - Saturday: 10:00 - 19:00"
        workTimeSunday="Sunday: 10:00 - 16:00"
        phoneNumber="&#40;509&#41; 786-4500"
        email="random@random.com"
        iframeUrl="https://www.google.com/maps/embed/v1/place?key=AIzaSyBB5Q9baE7J1kDhHTKW7yqDuuYGhRcI6Q4&q=2100+PALOS+VERDES+DR+LOMITA+CA&zoom=15"
      />
      <BarberShopDetails
        barberShopName="Classic Cuts Barbershop Two"
        street="9500 SAINT ANDREWS DR SANTEE CA"
        workTime="Monday - Saturday: 10:00 - 19:00"
        workTimeSunday="Sunday: 10:00 - 16:00"
        phoneNumber="&#40;509&#41; 786-4500"
        email="random@random.com"
        iframeUrl="https://www.google.com/maps/embed/v1/place?key=AIzaSyBB5Q9baE7J1kDhHTKW7yqDuuYGhRcI6Q4&q=9500+SAINT+ANDREWS+DR+SANTEE+CA&zoom=15"
        alignment="flex-row-reverse"
      />
      <BookBanner />
    </React.Fragment>
  );
}
