import { DEFAULT_CARD_BOOLEAN } from "@/constants/card";
import { Card } from "@/types/card";
import { useState } from "react";

function useStep() {
  const [step, setStep] = useState<Record<keyof Card, boolean>>(DEFAULT_CARD_BOOLEAN);

  const handleNext = (nextStep: keyof Card) => {
    setStep((prev) => ({
      ...prev,
      [nextStep]: true,
    }));
  };

  const isCompleted = Object.values(step).every((value) => value === true)

  return { step, handleNext, isCompleted };
}

export default useStep;
