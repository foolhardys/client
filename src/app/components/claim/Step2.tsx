"use client";

import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

const Step2: React.FC<StepProps> = ({ completeStep }) => {
  const [hospital, setHospital] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeStep(2);
  };

  return (
    <div className="w-full mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Step 2: Select Hospital
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Hospital:
          </label>
          <select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-black"
            required
          >
            <option value="">Select a hospital</option>
            <option value="hospital1">Hospital 1</option>
            <option value="hospital2">Hospital 2</option>
            <option value="hospital2">Hospital 3</option>
            <option value="hospital2">Hospital 4</option>
            <option value="hospital2">Hospital 5</option>
          </select>
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

export default Step2;
