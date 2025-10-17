import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { RenderIf } from "../../../components/RenderIf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validate, registerValidation, unregisterValidation, formSchema } from "../utils/validation";
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
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    registerValidation(async () => {
      const isValid = await validate(formSchema, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        date: formData.date,
        time: formData.time,
      });
      setHasError(!isValid);
      return isValid;
    });

    return () => unregisterValidation();
  }, [formData, validate, registerValidation, unregisterValidation]);

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
    setHasError(false);

    if (name === "date") {
      const currentDate = new Date().toISOString().split("-");
      const currentYear = Number(currentDate[0]);
      const currentMonth = Number(currentDate[1]);
      const currentDay = Number(currentDate[2].split("T")[0]);

      const [inputYear, inputMonth, inputDay] = value.split("-").map(Number);

      // Doing this to check if the input date is older than today's date

      if (value === "") return setIsDatePicked(false);

      if (currentYear > inputYear) return setIsDatePicked(false);

      if (currentYear === inputYear && currentMonth > inputMonth)
        return setIsDatePicked(false);

      if (currentMonth === inputMonth && currentDay > inputDay)
        return setIsDatePicked(false);

      setIsDatePicked(true);

      try {
        toast.loading("Loading...", { id: "free-appointments" });
        const response = await fetch("/api/freeappointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ barberName, date: value }),
        });

        if (!response.ok) {
          toast.dismiss("free-appointments");
          throw new Error("Something went wrong, please try again later");
        }

        const freeAppointmentsData = await response.json();

        toast.dismiss("free-appointments");

        setFreeAppointments(freeAppointmentsData["data"]);
      } catch {
        toast.error("Something went wrong, please try again later", {
          duration: 4000,
        });
      }
    }
  };

  const handleTimeClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const value = event.currentTarget.value;
    setFormData((prevFormData) => ({ ...prevFormData, time: value }));
  };

  return (
    <React.Fragment>
      <h3 className="block p-5 text-lg border-b border-opacity-10">
        Enter Your Details
      </h3>
      <form
        className="flex flex-col p-5 gap-4"
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
            aria-invalid={hasError}
            className={hasError ? "border-destructive" : ""}
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
            aria-invalid={hasError}
            className={hasError ? "border-destructive" : ""}
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
            aria-invalid={hasError}
            className={hasError ? "border-destructive" : ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date:</Label>
          <Input
            type="date"
            id="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            max={
              new Date(new Date().setMonth(new Date().getMonth() + 1))
                .toISOString()
                .split("T")[0]
            }
            value={formData.date}
            onChange={handleChange}
            aria-invalid={hasError}
            className={hasError ? "border-destructive" : ""}
          />
        </div>
        <RenderIf condition={isDatePicked}>
          <div>
            <span className="block p-5 text-lg text-center border-b border-opacity-10">
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
                  value={freeAppointment}
                  onClick={handleTimeClick}
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
