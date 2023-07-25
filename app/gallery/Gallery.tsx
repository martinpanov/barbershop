"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpointMidScreen = 768;
    const breakpointLargeScreen = 1024;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <section className="flex justify-center px-10 pt-20 pb-10 xl:px-0">
            <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {width < breakpointMidScreen &&
                    <>
                        <Image quality={100} src="/barber-giving-haircut.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                        <Image quality={100} src="/barber-adds-final-touches-to-a-haircut.jpg" alt="barber-adds-final-touches-to-a-haircut" width={1280} height={1920} />
                        <Image quality={100} src="/barber-shaves-a-mans-face.jpg" alt="barber-shaves-a-mans-face" width={1280} height={1920} />
                        <Image quality={100} src="/haircut4.jpg" alt="haircut4" width={1280} height={1920} />
                        <Image quality={100} src="/barber-inspects-his-work-of-a-clean-haircut.jpg" alt="barber-inspects-his-work-of-a-clean-haircut" width={1280} height={1920} />
                        <Image quality={100} src="/barber-shaves-side-of-persons-head.jpg" alt="barber-shaves-side-of-persons-head" width={1280} height={1920} />
                        <Image quality={100} src="/man-getting-his-beard-trimmed-by-barber.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                        <Image quality={100} src="/haircut2.jpg" alt="haircut2" width={1280} height={1920} />
                        <Image quality={100} src="/haircut1.jpg" alt="haircut1" width={1280} height={1920} />
                        <Image quality={100} src="/man-with-beard-getting-a-trim.jpg" alt="man-with-beard-getting-a-trim" width={1280} height={1920} />
                        <Image quality={100} src="/haircut3.jpg" alt="haircut3" width={1280} height={1920} />
                        <Image quality={100} src="/haircut5.jpg" alt="haircut3" width={1280} height={1920} />
                    </>
                }

                {(width >= breakpointMidScreen && width <= breakpointLargeScreen) &&
                    <>
                        <div className="grid gap-5">
                            <Image quality={100} src="/barber-giving-haircut.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-adds-final-touches-to-a-haircut.jpg" alt="barber-adds-final-touches-to-a-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-shaves-a-mans-face.jpg" alt="barber-shaves-a-mans-face" width={1280} height={1920} />
                            <Image quality={100} src="/haircut4.jpg" alt="haircut4" width={1280} height={1920} />
                            <Image quality={100} src="/haircut1.jpg" alt="haircut1" width={1280} height={1920} />
                            <Image quality={100} src="/man-with-beard-getting-a-trim.jpg" alt="man-with-beard-getting-a-trim" width={1280} height={1920} />
                        </div>
                        <div className="grid gap-5">
                            <Image quality={100} src="/barber-inspects-his-work-of-a-clean-haircut.jpg" alt="barber-inspects-his-work-of-a-clean-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-shaves-side-of-persons-head.jpg" alt="barber-shaves-side-of-persons-head" width={1280} height={1920} />
                            <Image quality={100} src="/man-getting-his-beard-trimmed-by-barber.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/haircut2.jpg" alt="haircut2" width={1280} height={1920} />
                            <Image quality={100} src="/haircut3.jpg" alt="haircut3" width={1280} height={1920} />
                            <Image quality={100} src="/haircut5.jpg" alt="haircut3" width={1280} height={1920} />
                        </div>
                    </>
                }

                {width > breakpointLargeScreen &&
                    <>
                        <div className="grid gap-5">
                            <Image quality={100} src="/barber-giving-haircut.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-adds-final-touches-to-a-haircut.jpg" alt="barber-adds-final-touches-to-a-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-shaves-a-mans-face.jpg" alt="barber-shaves-a-mans-face" width={1280} height={1920} />
                            <Image quality={100} src="/haircut4.jpg" alt="haircut4" width={1280} height={1920} />
                        </div>
                        <div className="grid gap-5">
                            <Image quality={100} src="/barber-inspects-his-work-of-a-clean-haircut.jpg" alt="barber-inspects-his-work-of-a-clean-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/barber-shaves-side-of-persons-head.jpg" alt="barber-shaves-side-of-persons-head" width={1280} height={1920} />
                            <Image quality={100} src="/man-getting-his-beard-trimmed-by-barber.jpg" alt="barber-giving-haircut" width={1280} height={1920} />
                            <Image quality={100} src="/haircut2.jpg" alt="haircut2" width={1280} height={1920} />
                        </div>
                        <div className="grid gap-5">
                            <Image quality={100} src="/haircut1.jpg" alt="haircut1" width={1280} height={1920} />
                            <Image quality={100} src="/man-with-beard-getting-a-trim.jpg" alt="man-with-beard-getting-a-trim" width={1280} height={1920} />
                            <Image quality={100} src="/haircut3.jpg" alt="haircut3" width={1280} height={1920} />
                            <Image quality={100} src="/haircut5.jpg" alt="haircut3" width={1280} height={1920} />
                        </div>
                    </>
                }
            </div>
        </section>
    );
}