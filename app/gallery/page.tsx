import React from "react";
import { Header } from "@/components/Header";
import { Gallery } from "./components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Page where you can view different images of haircuts",
};

export default function GalleryPage() {
  return (
    <React.Fragment>
      <Header title="Gallery" imageName="gallery-hero" />
      <Gallery />
    </React.Fragment>
  );
}
