"use client";

import React, { useState } from "react";

interface StepProps {
  completeStep: (step: number) => void;
}

const Step6: React.FC<StepProps> = ({ completeStep }) => {
  const [bookingId, setBookingId] = useState<string | null>(null);

  const generateBookingId = () => {
    // Generate a random number for booking ID
    const randomId = Math.floor(Math.random() * 1000000).toString();
    setBookingId(randomId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process booking and complete step 6
    completeStep(6);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-500">
        Step 6: Generate Booking ID
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
        <button
          type="button"
          onClick={generateBookingId}
          className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
        >
          Generate Booking ID
        </button>

        {bookingId && (
          <p className="mt-4 text-lg font-medium text-gray-700">
            Generated Booking ID: <span className="font-bold">{bookingId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Step6;