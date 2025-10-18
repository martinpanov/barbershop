import Image from "next/image";

export const Work: React.FC = () => {
  return (
    <section className="pt-10">
      <h2 className="mb-21 text-center text-4xl font-bold italic sm:text-5xl">
        <span className="md:underline md:decoration-1 md:underline-offset-8">
          Showcasing Ou
        </span>
        r Masterful Work
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-11 lg:gap-4">
        {[1, 2, 3, 4, 5].map((imageNumber) => {
          return (
            <Image
              key={imageNumber}
              quality={100}
              width={320}
              height={384}
              src={`/haircut${imageNumber}.jpg`}
              alt="haircut"
              className="h-96 w-80 object-cover duration-300 ease-in hover:scale-110"
            />
          );
        })}
      </div>
    </section>
  );
};
