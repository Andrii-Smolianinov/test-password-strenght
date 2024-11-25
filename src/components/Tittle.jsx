import React from "react";

const Tittle = ({ text }) => {
  return (
    <h1 className="text-center font-bold text-cyan-400 tracking-wide uppercase
        mb-3 md:mb-4 lg:mb-5
        text-lg md:text-xl lg:text-2xl">
      {text}
    </h1>
  );
};

export default Tittle;
