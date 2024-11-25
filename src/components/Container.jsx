import React from "react";

const Container = ({ children }) => {
  return (
    <section
      className="flex items-center justify-center h-screen w-screen 
      bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
      px-2 md:px-4 lg:px-6 xl:px-8
      py-2 md:py-4 lg:py-6 xl:py-8"
    >
      {children}
    </section>
  );
};

export default Container;