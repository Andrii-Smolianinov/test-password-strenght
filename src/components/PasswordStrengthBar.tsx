import React from "react";

import { StrengthTypes } from "../controllers/password/passwordTypes";
import { colorLevels } from "../controllers/colors/colorLevels";

interface PasswordStrengthBarProps {
  strength: StrengthTypes;
}

const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ strength }) => {
  const { level, message } = strength;

  return (
    <>
      <div
        className="flex justify-between 
        mb-2 lg:mb-3"
      >
        {colorLevels[level].map((color, i) => (
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
