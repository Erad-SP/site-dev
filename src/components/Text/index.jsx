import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[130%]",
  lg: "text-[120px] font-normal leading-[141px]",
  s: "text-sm font-normal leading-[17px]",
  md: "text-xl font-normal leading-5",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
