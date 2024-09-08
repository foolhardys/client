"use client";
import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

interface Details {
  prescriptionDetails: string;
  document?: File | null;
  notes: string;
}

const Step4: React.FC<StepProps> = ({ completeStep }) => {
  const [details, setDetails] = useState<Details>({
    prescriptionDetails: "",
    document: null,
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeStep(4); // Move to the next step
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Prescription and Related Documents
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Prescription Details:
          </label>
          <input
            type="text"
            value={details.prescriptionDetails}
            onChange={(e) =>
              setDetails({ ...details, prescriptionDetails: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Document Upload:
          </label>
          <input
            type="file"
            onChange={(e) =>
              setDetails({
                ...details,
                document: e.target.files ? e.target.files[0] : null,
              })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Additional Notes:
          </label>
          <textarea
            value={details.notes}
            onChange={(e) => setDetails({ ...details, notes: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out resize-none"
            rows={4}
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

export default Step4;
