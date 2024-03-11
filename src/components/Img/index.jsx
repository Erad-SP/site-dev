import React from "react";

const Img = ({ className, src = "defaultNoData.png", alt = "testImg", onClick = null, url, ...restProps }) => {

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // Open URL in a new tab
    }
  };

  return <img className={className} src={src} alt={alt} onClick={handleClick} {...restProps} loading={"lazy"} />;
};

export { Img };
