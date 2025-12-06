import { Metadata } from "next";
import React from "react";

import { Header } from "@/components/Header";
import { PriceList } from "@/components/PriceList";

import BookBanner from "../components/BookBanner";
import { Services } from "./components/Services";
import { Work } from "./components/Work";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <React.Fragment>
      <Header
        title='Welcome to "Classic Cuts" - Where Style Meets Precision'
        imageName="hero-img"
        fullScreen
        showButton
      />
      <Services />
      <Work />
      <PriceList showImage showButton />
      <BookBanner />
    </React.Fragment>
  );
}
