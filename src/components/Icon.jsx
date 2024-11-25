import React from "react";

const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
