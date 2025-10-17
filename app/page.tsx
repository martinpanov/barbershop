import BookBanner from "../components/BookBanner";
import React from "react";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { PriceList } from "@/components/PriceList";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <React.Fragment>
      <Header
        title="Welcome to &quot;Classic Cuts&quot; - Where Style Meets Precision"
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
