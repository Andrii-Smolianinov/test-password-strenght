import { passwordlevels } from "../controllers/password/passwordLevels";

const usePasswordStrength = () => {
  const getStrength = (password:string) => {
    const conditions = [
      /[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];

    const count = conditions.filter(Boolean).length;

    if (!password) return passwordlevels.empty;
    if (password.length < 8) return passwordlevels.short;
    if (count === 1) return passwordlevels.simple;
    if (count === 2) return passwordlevels.medium;
    if (count === 3) return passwordlevels.strong;

    return passwordlevels.empty;
  };

  return { getStrength };
};

export default usePasswordStrength;
