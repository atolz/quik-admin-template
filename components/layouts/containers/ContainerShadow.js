import React from "react";

const ContainerShadow = ({ children, className, ...props }) => {
  return (
    // <div style={{ boxShadow: " 0px 4px 40px rgba(1, 120, 154, 0.08)" }} className={` overflow-hidden w-full rounded-xl bg-white px-6 md:px-8 py-6 ${className}`} {...props}>
    <div style={{ boxShadow: " 0px 8px 8px rgba(2, 62, 79, 0.04)" }} className={` overflow-hidden w-full rounded-xl bg-white px-6 md:px-8 py-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ContainerShadow;
