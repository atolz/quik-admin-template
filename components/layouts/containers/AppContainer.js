import React from "react";

const AppContainer = ({ children, className }) => {
  return <div className={`" max-w-[1400px] px-4 ${className}`}>{children}</div>;
};

export default AppContainer;
