"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Lightbox } from "./Lightbox";
import { RenderIf } from "@/components/RenderIf";

const IMAGES = [
  "barber-giving-haircut",
  "barber-adds-final-touches-to-a-haircut",
  "barber-shaves-a-mans-face",
  "haircut4",
  "barber-inspects-his-work-of-a-clean-haircut",
  "barber-shaves-side-of-persons-head",
  "man-getting-his-beard-trimmed-by-barber",
  "haircut2",
  "haircut1",
  "man-with-beard-getting-a-trim",
  "haircut3",
  "haircut5",
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section className="flex justify-center px-10 pt-20 pb-10 xl:px-0">
      <div className="columns-1 gap-5 max-w-6xl md:columns-2 lg:columns-3">
        {IMAGES.map((image, index) => (
          <Image
            key={index}
            className="cursor-pointer mb-5 break-inside-avoid"
            onClick={() => setSelectedImage(image)}
            quality={100}
            src={`/${image}.webp`}
            alt={image}
            width={370}
            height={660}
            sizes="(min-width: 1024px) 370px, (min-width: 768px) 300px, calc(93.75vw - 61px)"
          />
        ))}
        <RenderIf condition={selectedImage}>
          <Lightbox
            images={IMAGES}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </RenderIf>
      </div>
    </section>
  );
};
