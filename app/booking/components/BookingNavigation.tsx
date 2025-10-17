import React from "react";
import { Button } from "@/components/ui/button";
import { RenderIf } from "@/components/RenderIf";

type BookingNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export const BookingNavigation: React.FC<BookingNavigationProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-center w-full gap-20 p-5 border-t border-opacity-10">
      <RenderIf condition={!isFirstStep}>
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
      </RenderIf>
      <Button
        onClick={isLastStep ? onSubmit : onNext}
        size="lg"
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};
