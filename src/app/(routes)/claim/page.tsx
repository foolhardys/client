"use client";

import React, { useState } from "react";
import Link from "next/link";
import Step1 from "@/app/components/claim/Step1";
import Step2 from "@/app/components/claim/Step2";
import Step3 from "@/app/components/claim/Step3";
import Step4 from "@/app/components/claim/Step4";
import Step5 from "@/app/components/claim/Step5";
import Step6 from "@/app/components/claim/Step6";

const steps = [
  { step: 1, label: "Enter Basic Details" },
  { step: 2, label: "Select Hospital" },
  { step: 3, label: "Enter Treatment Details" },
  { step: 4, label: "Prescription and Related Documents" },
  { step: 5, label: "Insurance Number" },
  { step: 6, label: "Booking ID" },
];

const ClaimPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]); // Only step 1 is accessible at the beginning

  const goToStep = (step: number) => {
    if (completedSteps.includes(step)) {
      setCurrentStep(step);
    }
  };

  const completeStep = (step: number) => {
    setCompletedSteps((prev) => [...new Set([...prev, step + 1])]);
  };

  const isStepAccessible = (step: number) => completedSteps.includes(step);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-600 p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Claim Process</h2>
        <ul className="space-y-4">
          {steps.map(({ step, label }) => (
            <li key={step}>
              <button
                onClick={() => goToStep(step)}
                disabled={!isStepAccessible(step)}
                className={`flex items-center justify-between w-full text-left py-2 px-4 rounded-lg transition ${
                  currentStep === step
                    ? "bg-blue-500"
                    : "bg-blue-700 hover:bg-blue-500"
                } ${
                  !isStepAccessible(step) ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isStepAccessible(step)}
                    readOnly
                    className="mr-2"
                  />
                  <span>{label}</span>
                </div>
              </button>
            </li>
          ))}
          <li>
            <Link href="/" passHref>
              <button className="text-center w-full py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white">
                Home
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-900 shadow-lg">
        {currentStep === 1 && <Step1 completeStep={completeStep} />}
        {currentStep === 2 && <Step2 completeStep={completeStep} />}
        {currentStep === 3 && <Step3 completeStep={completeStep} />}
        {currentStep === 4 && <Step4 completeStep={completeStep} />}
        {currentStep === 5 && <Step5 completeStep={completeStep} />}
        {currentStep === 6 && <Step6 completeStep={completeStep} />}
      </div>
    </div>
  );
};

export default ClaimPage;
