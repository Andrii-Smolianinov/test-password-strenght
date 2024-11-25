import React from "react";

export default function Container({ children }) {
  return (
    <section className="h-screen w-screen bg-violet-800 flex items-center justify-center">
      {children}
    </section>
  );
}
