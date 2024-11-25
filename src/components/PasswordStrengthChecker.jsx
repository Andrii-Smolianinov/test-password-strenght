import React, { useState } from "react";

import { PasswordStrengthBar, InputBar, Tittle } from "./index";

const PasswordStrengthChecker = () => {
  const [strength, setStrength] = useState({
    level: "empty",
    message: "Please enter a password",
    shadow: "233, 238, 231, 0.75",
  });

  const getStrength = (password) => {
    const conditions = [
      /[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];

    const count = conditions.filter(Boolean).length;

    if (!password)
      return {
        level: "empty",
        message: "Please enter a password",
        shadow: "233, 238, 231, 0.75",
      };
    if (password.length < 8)
      return {
        level: "short",
        message: "Password is too short",
        shadow: "241, 9, 9, 0.75",
      };
    if (count === 1)
      return {
        level: "simple",
        message: "Password is too simple",
        shadow: "241, 9, 9, 0.75",
      };
    if (count === 2)
      return {
        level: "medium",
        message: "Password is medium strength",
        shadow: "214, 241, 9, 0.75",
      };
    if (count === 3)
      return {
        level: "strong",
        message: "Password is strong",
        shadow: "72, 231, 13, 0.75",
      };
  };

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
