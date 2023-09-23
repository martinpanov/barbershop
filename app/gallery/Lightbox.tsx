"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

interface LightboxProps {
    images: string[];
    selectedImage: string;
    setSelectedImage: Dispatch<SetStateAction<string>>;
}


export default function Lightbox({ images, selectedImage, setSelectedImage }: LightboxProps) {
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
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
        console.log(event.key);
        if (event.key === "ArrowRight") {
            handleNextImage();
        } else if (event.key === "ArrowLeft") {
            handlePreviousImage();
        } else if (event.key === "Escape") {
            setSelectedImage('');
        }
    };

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) handleNextImage();
        if (isRightSwipe) handlePreviousImage();
    };

    return (
        <>
            {selectedImage &&
                <div className="fixed inset-0 top-0 left-0 z-50 flex flex-col items-center w-full bg-black bg-opacity-90">
                    <div className="flex items-center justify-between w-full p-6">
                        <span className="flex-1 ml-10 text-2xl text-center md:ml-8">
                            {images.indexOf(selectedImage) + 1}/{images.length}
                        </span>
                        <FontAwesomeIcon
                            icon={faX}
                            className="ml-auto text-3xl cursor-pointer"
                            onClick={() => setSelectedImage('')}
                        />
                    </div>

                    <div
                        className="flex items-center justify-center w-screen h-full gap-6 lg:gap-52 xl:gap-80"
                        draggable
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="hidden lg:block lg:absolute lg:top-[55%] lg:-translate-y-2/4 lg:-translate-x-2/4 lg:text-white lg:left-[10%] lg:text-4xl lg:cursor-pointer"
                            onClick={handlePreviousImage}
                        />
                        <Image quality={100} priority={true} src={`/${selectedImage}.jpg`} alt={selectedImage} width={512} height={844} className="object-contain w-4/5 h-4/5 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl" />
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="hidden lg:block lg:absolute lg:top-[55%] lg:-translate-y-2/4 lg:-translate-x-2/4 lg:text-white lg:right-[8%] lg:text-4xl lg:cursor-pointer"
                            onClick={handleNextImage}
                        />
                    </div>
                </div>
            }
        </>
    );
}