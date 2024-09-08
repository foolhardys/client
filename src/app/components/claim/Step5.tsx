"use client";

import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

const Step5: React.FC<StepProps> = ({ completeStep }) => {
  const [insuranceNumber, setInsuranceNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeStep(5); // Mark step 5 as completed
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Step 5: Insurance Number
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Insurance Number:
          </label>
          <input
            type="text"
            value={insuranceNumber}
            onChange={(e) => setInsuranceNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>
        <button
          type="submit"
          className="w-1/6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step5;
