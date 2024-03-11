import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold leading-[80px]",
  "2xl": "text-2xl font-bold leading-[29px]",
  xl: "text-xl font-bold leading-6",
  "5xl": "text-5xl font-bold leading-[57px]",
  "4xl": "text-[40px] font-bold leading-[47px]",
  s: "text-sm font-bold leading-[17px]",
  md: "text-base font-bold leading-[19px]",
  xs: "text-xs font-semibold leading-[130%]",
  lg: "text-lg font-semibold leading-5",
};

const Heading = ({ children, className = "", size = "s", as, url, scrollOffset = 0, ...restProps }) => {
  const Component = as || "h6";

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
    <Component className={`text-white-A700 font-raleway ${className} ${sizes[size]}`} onClick={handleClick} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
