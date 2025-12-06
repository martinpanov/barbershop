import { Metadata } from "next";
import React from "react";

import { Header } from "@/components/Header";
import { PriceList } from "@/components/PriceList";

import BookBanner from "../../components/BookBanner";
import { Barbers } from "./components/Barbers";
import { Services } from "./components/Services";

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
