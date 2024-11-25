import { levels } from "../controllers/passwordLevels";

const usePasswordStrength = () => {
  const getStrength = (password) => {
    const conditions = [
      /[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];

    const count = conditions.filter(Boolean).length;

    if (!password) return levels.empty;
    if (password.length < 8) return levels.short;
    if (count === 1) return levels.simple;
    if (count === 2) return levels.medium;
    if (count === 3) return levels.strong;
  };

  return { getStrength };
};

export default usePasswordStrength;