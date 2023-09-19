import React from "react";

const AppContainer = ({ children, className }) => {
  return <div className={`" max-w-[1400px] px-10 py-8 bg-color_bg-2 ${className}`}>{children}</div>;
};

export default AppContainer;
