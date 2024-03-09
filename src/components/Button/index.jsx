import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[28px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    red_400: "bg-red-400 text-white-A700",
    white_A700_0c: "bg-white-A700_0c text-black-900",
    white_A700: "bg-white-A700 text-gray-900",
    red_700: "bg-red-700",
    gray_200: "bg-gray-200 text-red-600",
  },
  outline: {
    red_700: "border-red-700 border border-solid text-white-A700",
    gray_700: "border-gray-700 border-t border-l border-solid text-black-900",
  },
};
const sizes = {
  "2xl": "h-[73px] px-[23px] text-base",
  lg: "h-[60px] px-[18px]",
  md: "h-[56px] px-[17px] text-base",
  xl: "h-[68px] px-[35px] text-xs",
  xs: "h-[50px] px-[15px] text-base",
  sm: "h-[52px] px-[35px] text-xs",
  "3xl": "h-[84px] px-[34px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "outline",
  size = "3xl",
  color = "gray_700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["2xl", "lg", "md", "xl", "xs", "sm", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["red_400", "white_A700_0c", "white_A700", "red_700", "gray_200", "gray_700"]),
};

export { Button };
