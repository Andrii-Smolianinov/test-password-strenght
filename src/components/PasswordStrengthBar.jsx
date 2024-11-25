import React from "react";

const PasswordStrengthBar = ({ strength }) => {
  const { level, message } = strength;
  const levels = {
    empty: ["bg-gray-300", "bg-gray-300", "bg-gray-300"],
    short: ["bg-red-500", "bg-red-500", "bg-red-500"],
    simple: ["bg-red-500", "bg-gray-300", "bg-gray-300"],
    medium: ["bg-yellow-400", "bg-yellow-400", "bg-gray-300"],
    strong: ["bg-lime-500", "bg-lime-500", "bg-lime-500"],
  };

  return (
    <>
      <div className="flex justify-between 
        mb-2 lg:mb-3">
        {levels[level].map((color, i) => (
          <div
            key={i}
            className={`flex-1 mx-[2px] h-2 rounded-md transition-colors ${color}`}
          ></div>
        ))}
      </div>
      <p className="text-sm text-teal-100">{message}</p>
    </>
  );
};

export default PasswordStrengthBar;
