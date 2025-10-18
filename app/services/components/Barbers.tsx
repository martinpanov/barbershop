import Image from "next/image";

const barbers = [
  {
    name: "Michael",
    experience: "Junior Barber",
  },
  {
    name: "Josh",
    experience: "Master Barber",
  },
  {
    name: "Mitchel",
    experience: "Senior Barber",
  },
] as const;

export const Barbers: React.FC = () => {
  return (
    <section className="py-10 lg:px-10">
      <h2 className="mb-20 text-center text-4xl font-bold italic">
        <span className="underline decoration-1 underline-offset-8">
          Our barb
        </span>
        ers
      </h2>
      <div className="font-roboto flex flex-col items-center gap-24 lg:flex-row lg:justify-center">
        {barbers.map(({ name, experience }, index) => (
          <article key={name} className="relative h-96 w-80">
            <Image
              width={320}
              height={384}
              src={`/barber${index + 1}.webp`}
              alt="barber"
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col items-center bg-[#000000db]">
              <h3 className="text-xl font-bold">{name}</h3>
              <p>{experience}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
