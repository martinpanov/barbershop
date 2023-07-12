import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Home page"
};

export default function Home() {
  return (
    <section className="h-screen">
      <img src="/hero-img.jpg" alt="hero-image" className="h-full w-full object-cover before:bg-slate-950 opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-8 ">
        <h1 className="text-6xl text-center italic font-bold">Welcome to "Classic Cuts" - Where Style Meets Precision</h1>
        <Link href='/booking' className="px-10 py-5 bg-yellow-700 text-xl">Book an appointment</Link>
      </div>
    </section>
  );
}
