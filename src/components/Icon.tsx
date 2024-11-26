import React from "react";

type IconProps = {
  id: string;
  className: string;
};

const Icon: React.FC<IconProps> = ({ id, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
