import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { RenderIf } from "../../../components/RenderIf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  validate,
  registerValidation,
  unregisterValidation,
  formSchema,
} from "../utils/validation";
import { BookingFormData } from "../types";

type StepFourFormData = Pick<
  BookingFormData,
  "firstName" | "lastName" | "phoneNumber" | "date" | "time"
>;

type StepFourProps = {
  barberName: string;
  formData: StepFourFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
};

export const BookingStepFour: React.FC<StepFourProps> = ({
  barberName,
  formData,
  setFormData,
}) => {
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [freeAppointments, setFreeAppointments] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const today = new Date().toISOString().split("T")[0];
  const oneMonthFromToday = new Date(
    new Date().setMonth(new Date().getMonth() + 1)
  )
    .toISOString()
    .split("T")[0];

  useEffect(() => {
    registerValidation(async () => {
      const { isValid, fieldErrors } = await validate(formSchema, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        date: formData.date,
        time: formData.time,
      });
      setErrors(fieldErrors);
      return isValid;
    });

    return () => unregisterValidation();
  }, [formData]);

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, "0");
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));

    if (name === "date") {
      setIsDatePicked(true);

      try {
        toast.loading("Loading available appointments...", {
          id: "free-appointments",
        });
        const response = await fetch("/api/freeappointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ barberName, date: value }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }

        const freeAppointmentsData = await response.json();
        setFreeAppointments(freeAppointmentsData["data"]);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong, please try again later";

        toast.error(message, { duration: 4000 });
      } finally {
        toast.dismiss("free-appointments");
      }
    }
  };

  return (
    <React.Fragment>
      <h3 className="border-opacity-10 block border-b p-5 text-lg">
        Enter Your Details
      </h3>
      <form
        className="flex flex-col gap-4 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            aria-invalid={errors.firstName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            aria-invalid={errors.lastName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number:</Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            aria-invalid={errors.phoneNumber}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date:</Label>
          <Input
            type="date"
            id="date"
            name="date"
            min={today}
            max={oneMonthFromToday}
            value={formData.date}
            onChange={handleChange}
            onClick={(e) => e.currentTarget.showPicker()}
            aria-invalid={errors.date}
          />
        </div>
        <RenderIf condition={isDatePicked}>
          <div>
            <span className="border-opacity-10 block border-b p-5 text-center text-lg">
              {formatDate(formData.date)}
            </span>
            <div className="grid grid-cols-3 gap-3 p-3">
              {freeAppointments.map((freeAppointment) => (
                <Button
                  key={freeAppointment}
                  type="button"
                  variant={
                    formData.time === freeAppointment ? "default" : "outline"
                  }
                  onClick={() =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      time: freeAppointment,
                    }))
                  }
                >
                  {freeAppointment}
                </Button>
              ))}
            </div>
          </div>
        </RenderIf>
      </form>
    </React.Fragment>
  );
};
