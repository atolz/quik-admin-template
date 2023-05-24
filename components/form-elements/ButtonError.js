import React from "react";
import Button from "./Button";

const ButtonError = ({ children, className, ...props }) => {
  return (
    <Button
      className={`bg-red-600 hover:bg-red-700 md:focus:!ring-red-300 
    ${props.outlined ? " !bg-transparent hover:!bg-transparent !border-red-600 !text-red-600" : ""}
    ${props.loading && !props.outlined ? " !bg-red-500 " : ""}
    ${props.loading && props.outlined ? " !bg-transparent !border-red-600 !text-red-600" : ""}
    ${className}
    `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonError;
