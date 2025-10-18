import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
  { name: "Location", step: 1 },
  { name: "Barber", step: 2 },
  { name: "Services", step: 3 },
  { name: "Date And Time", step: 4 },
  { name: "Summary", step: 5 },
];

type BookingProgressProps = {
  currentStep: number;
};

export const BookingProgress: React.FC<BookingProgressProps> = ({
  currentStep,
}) => {
  const getStepClasses = (step: number) =>
    cn(
      "rounded-full",
      step < currentStep && "bg-neutral-600",
      step === currentStep && "bg-green-400",
      step > currentStep && "bg-purple-950"
    );

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-8 lg:justify-start lg:gap-10 lg:px-5">
      <div className="h-24 w-44">
        <Link href="/">
          <Image
            width={360}
            height={360}
            src="/logo-2.png"
            alt="logo"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      <ul className="hidden lg:flex lg:flex-col lg:gap-7">
        {steps.map(({ name, step }) => (
          <li key={name}>
            <span className={cn(getStepClasses(step), "mr-2 px-2.5 py-1")}>
              {step}
            </span>
            <span>{name}</span>
          </li>
        ))}
      </ul>

      <ul className="flex gap-3 lg:hidden">
        {steps.map(({ step }) => (
          <li key={step} className={cn(getStepClasses(step), "px-3 py-1")}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};
