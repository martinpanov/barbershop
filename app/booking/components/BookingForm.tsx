"use client";

import { useState } from "react";
import { BookingStepFour } from "./BookingStepFour";
import { toast } from "sonner";
import { RenderIf } from "../../../components/RenderIf";
import { ThankYou } from "./ThankYou";
import { BookingNavigation } from "./BookingNavigation";
import { validateStep } from "../utils/validation";
import { BookingProgress } from "./BookingProgress";
import { Summary } from "./Summary";
import { BookingFormData } from "../types";
import { BookingStep } from "./BookingStep";
import { BOOKING_STEP_CONFIG } from "../constants/bookingSteps";

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    service: "",
    barberName: "",
    location: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  const handleNext = async () => {
    const isValid = await validateStep();

    if (isValid) {
      stepHandler("+");
    }
  };

  const stepHandler = async (type: string) => {
    if (type === "+") {
      setCurrentStep((prevState) => prevState + 1);
      return;
    }

    if (currentStep - 1 === 0) {
      return;
    }

    setCurrentStep((prevState) => prevState - 1);

    if (currentStep - 1 === 1) {
      setFormData((prevData) => ({ ...prevData, barberName: "" }));
    }
  };

  const handleSubmit = async () => {
    try {
      toast.loading("Loading...", { id: "appointment-submit" });

      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (errorData.errors) {
          const errorMessages = Object.values(errorData.errors).join(", ");
          throw new Error(errorMessages);
        }

        throw new Error(errorData.error);
      }

      toast.dismiss("appointment-submit");
      toast.success("Your appointment has been made!", { duration: 4000 });

      setFormData({
        service: "",
        barberName: "",
        location: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        date: "",
        time: "",
      });
      setIsSubmitted(true);
    } catch (error) {
      toast.dismiss("appointment-submit");

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong, please try again later";

      toast.error(message, { duration: 4000 });
    }
  };

  return (
    <section className="flex items-center justify-center py-10 lg:py-20">
      <RenderIf condition={isSubmitted}>
        <ThankYou />
      </RenderIf>
      <RenderIf condition={!isSubmitted}>
        <div className="min-h-[600px] w-11/12 rounded-xl border-1 md:max-w-5xl lg:flex">
          <BookingProgress currentStep={currentStep} />
          <div className="flex w-full flex-col">
            <div className="min-h-[400px] flex-1">
              {BOOKING_STEP_CONFIG.map((step) => (
                <RenderIf key={step.id} condition={currentStep === step.id}>
                  <BookingStep
                    title={step.title}
                    items={step.items}
                    selectedValue={formData[step.formKey]}
                    validationSchema={step.validationSchema}
                    onSelect={(value: string) =>
                      setFormData((prev) => ({
                        ...prev,
                        [step.formKey]: value,
                      }))
                    }
                    className={step.className}
                  />
                </RenderIf>
              ))}

              <RenderIf condition={currentStep === 4}>
                <BookingStepFour
                  barberName={formData.barberName}
                  formData={formData}
                  setFormData={setFormData}
                />
              </RenderIf>

              <RenderIf condition={currentStep === 5}>
                <Summary formData={formData} />
              </RenderIf>
            </div>

            <BookingNavigation
              currentStep={currentStep}
              totalSteps={5}
              onBack={() => stepHandler("-")}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </RenderIf>
    </section>
  );
}
