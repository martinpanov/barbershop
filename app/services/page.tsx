import React from "react";
import BookBanner from "../../components/BookBanner";
import { Services } from "./components/Services";
import { Barbers } from "./components/Barbers";
import { Header } from "@/components/Header";
import { PriceList } from "@/components/PriceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Page about our services",
};

export default function ServicesPage() {
  return (
    <React.Fragment>
      <Header title="Services" imageName="services-hero" />
      <Services />
      <Barbers />
      <PriceList />
      <BookBanner />
    </React.Fragment>
  );
}
