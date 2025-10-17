"use client";

import React, { useState } from "react";
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
        toast.dismiss("appointment-submit");
        throw Error;
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
    } catch {
      toast.error("Something went wrong, please try again later", {
        duration: 4000,
      });
    }
  };

  return (
    <section className="flex items-center justify-center py-10 lg:py-20">
      <RenderIf condition={isSubmitted}>
        <ThankYou />
      </RenderIf>
      <RenderIf condition={!isSubmitted}>
        <div className="w-11/12 min-h-[600px] md:max-w-5xl lg:flex border-1 rounded-xl">
          <BookingProgress currentStep={currentStep} />
          <div className="flex flex-col w-full">
            <div className="flex-1 min-h-[400px]">
              {BOOKING_STEP_CONFIG.map((step) => (
                <RenderIf key={step.id} condition={currentStep === step.id}>
                  <BookingStep
                    title={step.title}
                    items={step.items}
                    selectedValue={formData[step.formKey]}
                    validationSchema={step.validationSchema}
                    onSelect={(value: string) =>
                      setFormData((prev) => ({ ...prev, [step.formKey]: value }))
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
