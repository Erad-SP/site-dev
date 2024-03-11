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
  "3xl": "h-[73px] px-[23px] text-base",
  "2xl": "h-[68px] px-[35px] text-xs",
  xl: "h-[60px] px-[18px]",
  lg: "h-[56px] px-[17px] text-base",
  md: "h-[52px] px-[35px] text-xs",
  sm: "h-[50px] px-[15px] text-base",
  xs: "h-[36px] px-[34px] text-xs",
};

const Button = ({children, className = "", leftIcon, rightIcon, shape = "", variant = "outline", size = "xs", color = "gray_700", url, scrollOffset = 0, ...restProps}) => {

  const handleClick = () => {
    if (url) {
      // Check if URL is internal or external
      if (url.startsWith("http") || url.startsWith("//")) {
        // External URL
        window.open(url, "_blank");
      } else {
        // Internal URL
        window.location.href = url;
      }
    }

    if (scrollOffset !== 0) {
      // Calculate the position to scroll to
    const targetElement = document.getElementById("/"); // Replace "scrollTarget" with the id of the target element
    if (targetElement) {
      const targetOffset = targetElement.offsetTop;
      window.scrollTo({
        top: targetOffset + scrollOffset,
        behavior: "smooth" // Optional: Smooth scrolling
      });
    }
    }
  };

  return (
    <button onClick={handleClick}
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
  size: PropTypes.oneOf(["3xl", "2xl", "xl", "lg", "md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["red_400", "white_A700_0c", "white_A700", "red_700", "gray_200", "gray_700"]),
};

export { Button };
