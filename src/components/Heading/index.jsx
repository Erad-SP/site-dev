import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold leading-[80px]",
  "2xl": "text-2xl font-bold leading-[29px]",
  xl: "text-xl font-bold leading-6",
  "5xl": "text-5xl font-bold leading-[57px]",
  "4xl": "text-[40px] font-bold leading-[47px]",
  s: "text-sm font-bold leading-[17px]",
  md: "text-base font-bold leading-[19px]",
  xs: "text-xs font-semibold leading-[15px]",
  lg: "text-lg font-semibold leading-5",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
