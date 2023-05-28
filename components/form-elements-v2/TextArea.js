import React, { forwardRef } from "react";

const TextAreaV2 = forwardRef(({ label, placeholder, inputClassName, rootClassName, labelClassName, ...props }, ref) => {
  return (
    <div className={`${rootClassName}`}>
      {label && (
        <label className=" text-color-text-default font-semibold text-base mb-2 block" for={props.name}>
          {label}
        </label>
      )}
      <textarea
        className={` w-full px-3 py-2 text-sm text-color-text-default placeholder:text-[#97A0AF] rounded bg-white border-[#DFE1E6] border focus:!border-color-primary focus:!outline-none focus:!shadow-none focus:!ring-0`}
        rows="5"
        cols="33"
        {...props}
      ></textarea>
    </div>
  );
});

TextAreaV2.displayName = TextAreaV2;
export default TextAreaV2;
