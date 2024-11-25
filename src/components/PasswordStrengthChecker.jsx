import React, { useState } from "react";

import PasswordStrengthBar from "./PasswordStrengthBar";

import { ImEyeBlocked } from "react-icons/im";
import { ImEye } from "react-icons/im";

const PasswordStrengthChecker = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ level: "empty", message: "Please enter a password" });
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getStrength = (password) => {
    const conditions = [
      /[a-zA-Z]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];

    console.log('conditions', conditions);

    const count = conditions.filter(Boolean).length;

    if (!password)
      return { level: "empty", message: "Please enter a password" };
    if (password.length < 8)
      return { level: "short", message: "Password is too short" };
    if (count === 1)
      return { level: "simple", message: "Password is too simple" };
    if (count === 2)
      return { level: "medium", message: "Password is medium strength" };
    if (count === 3) return { level: "strong", message: "Password is strong" };
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setStrength(getStrength(inputValue));
  };

  return (
    <div className="flex flex-col border-2 border-gray-700 py-4 px-8 bg-cyan-700 shadow-lg shadow-yellow-400/50">
      <h1 className="text-2xl font-bold text-cyan-400 mb-3 text-center">
        Test Password Strenght
      </h1>

      <div className="flex items-center mb-5 relative">
        <input
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          className="border w-80 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div
          className="absolute cursor-pointer right-3"
          onClick={handleShowPassword}
        >
          {showPassword ? <ImEye /> : <ImEyeBlocked />}
        </div>
      </div>

      <PasswordStrengthBar level={strength.level} />
      <p className="text-sm text-teal-100">{strength.message}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
