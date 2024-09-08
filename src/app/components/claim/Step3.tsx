"use client";
import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

const Step3: React.FC<StepProps> = ({ completeStep }) => {
  const [treatmentDetails, setTreatmentDetails] = useState({
    treatmentType: "",
    doctorName: "",
    treatmentDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark step 3 as completed after submitting the form
    completeStep(3);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Step 3: Enter Treatment Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Treatment Type:
          </label>
          <input
            type="text"
            value={treatmentDetails.treatmentType}
            onChange={(e) =>
              setTreatmentDetails({
                ...treatmentDetails,
                treatmentType: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-black"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Doctor Name:
          </label>
          <input
            type="text"
            value={treatmentDetails.doctorName}
            onChange={(e) =>
              setTreatmentDetails({
                ...treatmentDetails,
                doctorName: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-black"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Treatment Date:
          </label>
          <input
            type="date"
            value={treatmentDetails.treatmentDate}
            onChange={(e) =>
              setTreatmentDetails({
                ...treatmentDetails,
                treatmentDate: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-1/6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step3;
