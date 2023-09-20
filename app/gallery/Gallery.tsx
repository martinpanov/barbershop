"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Lightbox from "./Lightbox";

export default function Gallery() {
    const images = ['barber-giving-haircut', 'barber-adds-final-touches-to-a-haircut',
        'barber-shaves-a-mans-face', 'haircut4', 'barber-inspects-his-work-of-a-clean-haircut',
        'barber-shaves-side-of-persons-head', 'man-getting-his-beard-trimmed-by-barber',
        'haircut2', 'haircut1', 'man-with-beard-getting-a-trim', 'haircut3', 'haircut5'];

    const [width, setWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const breakpointMidScreen = 768;
    const breakpointLargeScreen = 1024;

    const handleWindowResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);


    return (
        <section className="flex justify-center px-10 pt-20 pb-10 xl:px-0">
            <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {width < breakpointMidScreen &&
                    <>
                        {images
                            .map((image, index) =>
                                <Image key={index}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                    quality={100}
                                    src={`/${image}.jpg`}
                                    alt={image}
                                    width={370}
                                    height={660}
                                    sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                />
                            )
                        }
                    </>
                }

                {(width >= breakpointMidScreen && width <= breakpointLargeScreen) &&
                    <>
                        <div className="grid gap-5">
                            {images.
                                slice(0, images.length / 2)
                                .map((image, index) =>
                                    <Image
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                        quality={100}
                                        src={`/${image}.jpg`}
                                        alt={image}
                                        width={300}
                                        height={535}
                                        sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                    />
                                )}
                        </div>
                        <div className="grid gap-5">
                            {images
                                .slice(images.length / 2, images.length)
                                .map((image, index) =>
                                    <Image
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                        quality={100}
                                        src={`/${image}.jpg`}
                                        alt={image}
                                        width={300}
                                        height={535}
                                        sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                    />
                                )}
                        </div>
                    </>
                }

                {width > breakpointLargeScreen &&
                    <>
                        <div className="grid gap-5">
                            {images
                                .slice(0, images.length / 3)
                                .map((image, index) =>
                                    <Image key={index}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                        quality={100}
                                        src={`/${image}.jpg`}
                                        alt={image}
                                        width={370}
                                        height={660}
                                        sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                    />
                                )}
                        </div>
                        <div className="grid gap-5">
                            {images
                                .slice(images.length / 3, images.length / 1.5)
                                .map((image, index) =>
                                    <Image
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                        quality={100}
                                        src={`/${image}.jpg`}
                                        alt={image}
                                        width={370}
                                        height={660}
                                        sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                    />
                                )}

                        </div>
                        <div className="grid gap-5">
                            {images
                                .slice(images.length / 1.5, images.length)
                                .map((image, index) =>
                                    <Image
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                        quality={100}
                                        src={`/${image}.jpg`}
                                        alt={image}
                                        width={370}
                                        height={660}
                                        sizes="(min-width: 480px) 370px, calc(93.75vw - 61px)"
                                    />
                                )}
                        </div>
                    </>
                }

                <Lightbox images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>
        </section>
    );
}