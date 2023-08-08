import Image from "next/image";
import Gallery from "./Gallery";

export const metadata = {
    title: "Gallery",
    description: "Page where you can view different images of haircuts"
};

export default function GalleryPage() {
    return (
        <>
            <section className="h-[50vh] relative">
                <h1 className="absolute z-10 text-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-playfair">Gallery</h1>
                <Image quality={100} src="/gallery-hero.jpg" alt="gallery-hero" width={1280} height={1920} className="object-cover w-full h-full opacity-50" />
            </section>

            <Gallery />
        </>
    );
}