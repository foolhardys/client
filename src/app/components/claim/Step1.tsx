"use client";
// components/Step1.js
import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

const Step1: React.FC<StepProps> = ({ completeStep }) => {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission and complete step 1
    completeStep(1);
  };

  return (
    <div className="w-full mx-auto p-6 bg-transparent shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Step 1: Enter Basic Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">Age:</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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

export default Step1;

