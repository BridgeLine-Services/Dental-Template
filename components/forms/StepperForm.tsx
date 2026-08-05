"use client";

import React from "react";
import { Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface StepItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StepperFormProps {
  steps: StepItem[];
  currentStep: number;
  onStepChange: (step: number) => void;
  onNext?: () => Promise<boolean> | boolean;
  onPrev?: () => void;
  onSubmit?: () => void;
  isSubmitting?: boolean;
  submitText?: string;
  children: React.ReactNode;
}

export function StepperForm({
  steps,
  currentStep,
  onStepChange,
  onNext,
  onPrev,
  onSubmit,
  isSubmitting = false,
  submitText = "Submit Form",
  children,
}: StepperFormProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = async () => {
    if (onNext) {
      const isValid = await onNext();
      if (!isValid) return;
    }
    if (!isLastStep) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    }
    if (!isFirstStep) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Stepper Header / Progress */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative flex items-center justify-between">
          {/* Connecting line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-0 rounded-full" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-500 -z-0 transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  if (index < currentStep) onStepChange(index);
                }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                    isCompleted
                      ? "bg-brand-600 text-white shadow-md shadow-brand-200"
                      : isCurrent
                      ? "bg-brand-500 text-white ring-4 ring-brand-100 shadow-md"
                      : "bg-slate-100 text-slate-400 border border-slate-200"
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : index + 1}
                </div>
                <div className="mt-2 text-center hidden sm:block">
                  <p
                    className={`text-xs font-semibold ${
                      isCurrent ? "text-brand-900" : isCompleted ? "text-slate-700" : "text-slate-400"
                    }`}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-[11px] text-slate-400 max-w-[100px] truncate">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile current step indicator */}
        <div className="mt-4 pt-3 border-t border-slate-100 sm:hidden flex justify-between items-center text-xs">
          <span className="font-semibold text-brand-900">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </span>
          <span className="text-slate-400 font-medium">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Step Content Container */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[350px] flex flex-col justify-between">
        <div>{children}</div>

        {/* Navigation Actions */}
        <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
          <Button
            type="button"
            variant="ghost"
            onClick={handlePrev}
            disabled={isFirstStep || isSubmitting}
            className={`gap-1 ${isFirstStep ? "invisible" : ""}`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          {isLastStep ? (
            <Button
              type="button"
              variant="primary"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="px-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                </>
              ) : (
                submitText
              )}
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={handleNext}
              disabled={isSubmitting}
              className="gap-1 px-6"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
