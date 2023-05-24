import React from "react";
import Button from "./Button";

const ButtonWarn = ({ children, className, ...props }) => {
  return (
    <>
      {/* <Button className=" bg-yellow-400  md:focus:!ring-yellow-200 hover:bg-yellow-500">{children}</Button> */}
      <Button
        className={`bg-yellow-400 hover:bg-yellow-500 md:focus:!ring-yellow-200 
${props.outlined ? " !bg-transparent hover:!bg-transparent !border-yellow-400 !text-yellow-400" : ""}
${props.loading && !props.outlined ? " !bg-yellow-500 " : ""}
${props.loading && props.outlined ? " !bg-transparent !border-yellow-400 !text-yellow-400" : ""}
${className}
`}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonWarn;
