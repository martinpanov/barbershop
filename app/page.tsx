import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Home page"
};

export default function Home() {
  return (
    <section className="h-screen">
      <Image fill={true} src="/hero-img.jpg" alt="hero-image" className="h-full w-full object-cover before:bg-slate-950 opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-8 w-4/5 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-center italic font-bold">Welcome to "Classic Cuts" - Where Style Meets Precision</h1>
        <Link href='/booking' className="px-4 py-3 text-lg sm:px-10 sm:py-5 bg-yellow-700 sm:text-xl">Book an appointment</Link>
      </div>
    </section>
  );
}
