import React from "react";

const Label = ({ children, props }) => {
  return (
    <label className=" text-color_text_default font-semibold text-base mb-2 block" for={props?.name}>
      {children}
    </label>
  );
};

export default Label;
