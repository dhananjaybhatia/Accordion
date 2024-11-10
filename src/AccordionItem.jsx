import React, { useState } from "react";

export default function AccordionItem({
  title,
  num,
  text,
  currOpen,
  onCurrOpen,
}) {
  const isOpen = num === currOpen;

  function handleToggle() {
    onCurrOpen(num); // Toggle open state based on whether this item is open
  }

  return (
    <div
      className={`border-b border-gray-200 ${
        isOpen ? "bg-green-100" : "bg-gray-100"
      }`} // Apply conditional background color change
    >
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200"
        onClick={handleToggle}
      >
        <div className="flex items-center space-x-2">
          {isOpen ? (
            <>
              <p className="text-lg font-semibold text-blue-700">
                {num < 9 ? `0${num + 1}` : num + 1}
              </p>
              <p className="text-lg font-semibold text-blue-700">{title}</p>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-gray-700">
                {num < 9 ? `0${num + 1}` : num + 1}
              </p>
              <p className="text-lg font-semibold text-gray-900">{title}</p>
            </>
          )}
        </div>
        <span
          className={`ml-5 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div className="p-4 bg-white text-gray-600 leading-relaxed">{text}</div>
      )}
    </div>
  );
}
