import React, { forwardRef } from "react";

const InputFieldV2 = forwardRef(({ label, inputClassName, rootClassName, labelClassName, ...props }, ref) => {
  return (
    <div className={` ${rootClassName}`}>
      {label && (
        <label className={` text-color-text-default font-semibold text-base mb-2 block ${labelClassName}`} for={props.name}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={` h-10 w-full px-3 py-2 text-sm text-color-text-default placeholder:text-[#97A0AF] rounded bg-white border-[#DFE1E6] border focus:shadow-none focus:ring-0 focus:border-color-primary focus:outline-none ${inputClassName}`}
        ref={ref}
      />
    </div>
  );
});

InputFieldV2.displayName = InputFieldV2;
export default InputFieldV2;
