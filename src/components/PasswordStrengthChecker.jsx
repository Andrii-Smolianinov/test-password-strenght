import React, { useState } from "react";
import usePasswordStrength from "../hooks/usePasswordStrength";

import { PasswordStrengthBar, InputBar, Tittle } from "./index";

const PasswordStrengthChecker = () => {
  const { getStrength } = usePasswordStrength();
  const [strength, setStrength] = useState({
    level: "empty",
    message: "Please enter a password",
    shadow: "233, 238, 231, 0.75",
  });

  return (
    <div
      className={`flex flex-col border-2 rounded-lg border-gray-900 bg-cyan-900 transition-shadow
      py-3 md:py-4 lg:py-5
      px-4 md:px-6 lg:px-8`}
      style={{
        boxShadow: `-1px 27px 33px -15px rgba(${strength.shadow})`,
      }}
    >
      <Tittle text="Test Password Strength" />
      <InputBar getStrength={getStrength} setStrength={setStrength} />
      <PasswordStrengthBar strength={strength} />
    </div>
  );
};

export default PasswordStrengthChecker;
