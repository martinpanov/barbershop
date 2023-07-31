"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState, useLayoutEffect } from "react";

export default function Gallery() {
    const images = ['barber-giving-haircut', 'barber-adds-final-touches-to-a-haircut',
        'barber-shaves-a-mans-face', 'haircut4', 'barber-inspects-his-work-of-a-clean-haircut',
        'barber-shaves-side-of-persons-head', 'man-getting-his-beard-trimmed-by-barber',
        'haircut2', 'haircut1', 'man-with-beard-getting-a-trim', 'haircut3', 'haircut5'];

    const [width, setWidth] = useState(window.innerWidth);
    const [selectedImage, setSelectedImage] = useState('');
    const breakpointMidScreen = 768;
    const breakpointLargeScreen = 1024;

    useLayoutEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("keydown", handleKeyDown);

        // Return a function from the effect that removes the event listener
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    const handlePreviousImage = () => {
        setSelectedImage((prevSelectedImage) => {
            const prevSelectedImageIndex = images.indexOf(prevSelectedImage);
            if (prevSelectedImageIndex - 1 < 0) return prevSelectedImage;
            return images[prevSelectedImageIndex - 1];
        });
    };

    const handleNextImage = () => {
        setSelectedImage((prevSelectedImage) => {
            const prevSelectedImageIndex = images.indexOf(prevSelectedImage);
            if (prevSelectedImageIndex === images.length - 1) return prevSelectedImage;
            return images[prevSelectedImageIndex + 1];
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            handleNextImage();
        } else if (event.key === "ArrowLeft") {
            handlePreviousImage();
        }
    };

    return (
        <section className="flex justify-center px-10 pt-20 pb-10 xl:px-0">
            <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {width < breakpointMidScreen &&
                    <>
                        {images.map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}
                    </>
                }

                {(width >= breakpointMidScreen && width <= breakpointLargeScreen) &&
                    <>
                        <div className="grid gap-5">
                            {images.slice(0, images.length / 2).map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}
                        </div>
                        <div className="grid gap-5">
                            {images.slice(images.length / 2, images.length).map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}
                        </div>
                    </>
                }

                {width > breakpointLargeScreen &&
                    <>
                        <div className="grid gap-5">
                            {images.slice(0, images.length / 3).map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}
                        </div>
                        <div className="grid gap-5">
                            {images.slice(images.length / 3, images.length / 1.5).map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}

                        </div>
                        <div className="grid gap-5">
                            {images.slice(images.length / 1.5, images.length).map((image, index) => <Image key={index} className="cursor-pointer" onClick={() => setSelectedImage(image)} quality={100} src={`/${image}.jpg`} alt={image} width={1280} height={1920} />)}
                        </div>
                    </>
                }

                {selectedImage &&
                    <div className="fixed top-0 left-0 z-50 flex flex-col items-center w-full h-screen bg-black bg-opacity-90">
                        <div className="flex items-center justify-end w-full h-28">
                            <FontAwesomeIcon
                                icon={faX}
                                className="mr-8 text-3xl cursor-pointer"
                                onClick={() => setSelectedImage('')}
                            />
                        </div>

                        <div className="flex items-center justify-center w-full h-full gap-10 lg:gap-52 xl:gap-80">
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="text-4xl cursor-pointer"
                                onClick={handlePreviousImage}
                            />
                            <Image quality={100} src={`/${selectedImage}.jpg`} alt={selectedImage} width={1280} height={1920} className="w-60 sm:w-96 md:w-full md:max-w-md lg:max-w-lg" />
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-4xl cursor-pointer"
                                onClick={handleNextImage}
                            />
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}