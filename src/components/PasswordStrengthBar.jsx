import React from "react";

const PasswordStrengthBar = ({ level }) => {
  const levels = {
    empty: ["bg-gray-300", "bg-gray-300", "bg-gray-300"],
    short: ["bg-red-500", "bg-red-500", "bg-red-500"],
    simple: ["bg-red-500", "bg-gray-300", "bg-gray-300"],
    medium: ["bg-yellow-400", "bg-yellow-400", "bg-gray-300"],
    strong: ["bg-lime-500", "bg-lime-500", "bg-lime-500"],
  };

  return (
    <div className="flex justify-between mb-3">
      {levels[level].map((color, i) => (
        <div
          key={i}
          className={`h-2 flex-1 mx-px rounded-md transition-colors ${color}`}
        ></div>
      ))}
    </div>
  );
};

export default PasswordStrengthBar;