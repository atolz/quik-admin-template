import React from "react";
import Button from "./Button";

const ButtonSecondary = ({ children, className, ...props }) => {
  return (
    <>
      {/* <Button className=" bg-yellow-400  md:focus:!ring-yellow-200 hover:bg-yellow-500">{children}</Button> */}
      <Button
        className={`bg-color-secondary hover:bg-[rgba(1,121,154,0.92)] md:focus:!ring-[rgba(1,121,154,0.52)]
  ${props.outlined ? " !bg-transparent hover:!bg-transparent !border-color-secondary !text-color-secondary" : ""}
  ${props.loading && !props.outlined ? " !bg-[rgba(1,121,154,0.82)] " : ""}
  ${props.loading && props.outlined ? " !bg-transparent !border-color-secondary !text-color-secondary" : ""}
  ${className}
  `}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonSecondary;
