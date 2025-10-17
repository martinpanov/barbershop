import Image from "next/image";
import React, { useEffect, useState } from "react";
import { validate, registerValidation, unregisterValidation } from "../utils/validation";
import { cn } from "@/lib/utils";
import { RenderIf } from "@/components/RenderIf";
import type { Schema } from "yup";

type SelectionItem = {
  value: string;
  label?: string;
  image?: string;
  price?: string;
};

type BookingStepProps = {
  title: string;
  items: SelectionItem[];
  selectedValue: string;
  validationSchema: Schema;
  onSelect: (value: string) => void;
  className?: string;
};

export const BookingStep: React.FC<BookingStepProps> = ({
  title,
  items,
  selectedValue,
  validationSchema,
  onSelect,
  className = "grid grid-cols-1 gap-5 p-5"
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    registerValidation(async () => {
      const isValid = await validate(validationSchema, selectedValue);
      setHasError(!isValid);
      return isValid;
    });

    return () => unregisterValidation();
  }, [selectedValue, validationSchema]);

  const handleSelect = (value: string) => {
    onSelect(value);
    setHasError(false);
  };

  return (
    <React.Fragment>
      <h3 className="block p-5 text-lg border-b border-opacity-10">
        {title}
      </h3>
      <div className={className}>
        {items.map((item) => {
          const label = item.label || item.value;

          return (
            <div
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={cn(
                "flex w-full items-center gap-3 p-5 shadow-xl lg:cursor-pointer",
                item.price && "justify-between",
                selectedValue === item.value && "border border-green-700",
                hasError && "border border-destructive"
              )}
            >
              <RenderIf condition={item.image}>
                <div className="overflow-hidden rounded-full h-14 w-14 sm:h-20 sm:w-20">
                  <Image
                    width={360}
                    height={360}
                    src={item.image!}
                    alt={label}
                    className="object-cover w-full h-full"
                  />
                </div>
              </RenderIf>
              <span className="text-sm sm:text-base">{label}</span>
              <RenderIf condition={item.price}>
                <span className="text-sm sm:text-base">{item.price}</span>
              </RenderIf>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
