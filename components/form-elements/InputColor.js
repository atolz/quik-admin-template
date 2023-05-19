import React, { forwardRef, useId, useRef, useState } from "react";

const InputColor = forwardRef(({ label, onChange = () => {}, inputClassName, rootClassName, labelClassName, ...props }, ref) => {
  let inputRef = useRef(null);
  let inputId = useId();
  const [isDirty, setIsDirty] = useState(false);
  return (
    <div onClick={() => (ref ? ref.current.showPicker() : inputRef.current?.showPicker())} className={`relative h-12 cursor-text ${rootClassName}`}>
      <input
        onChange={(e) => {
          onChange(e);
          // console.log("chage", ref, inputRef.current);
          if (e.target.value) {
            setIsDirty(true);
          } else {
            setIsDirty(false);
          }
        }}
        type="color"
        id={inputId}
        {...props}
        className={` cursor-text focus:cursor-text peer absolute top-0 left-0 h-full  w-full px-3 py-1 pr-40 text-sm text-[#4F4F4F] placeholder:text-[#97A0AF] rounded-lg bg-[#F0F3F5] border-[#BDBDBD] border focus:shadow-none focus:ring-0 focus:border-color-primary focus:outline-none ${inputClassName}`}
        ref={ref || inputRef}
        placeholder=""
      />
      {label && (
        <label
          htmlFor={inputId}
          className={` absolute cursor-text  left-3 transition-all
          ${isDirty ? " top-1 -translate-y-0 text-[#BDBDBD] text-xs" : " top-1/2 -translate-y-1/2 text-[#828282] text-sm "}
          peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[#BDBDBD] peer-focus:text-xs
          block ${labelClassName}`}
          // for={props.name}
        >
          {label}
        </label>
      )}
    </div>
  );
});

InputColor.displayName = InputColor;
export default InputColor;

// peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[#BDBDBD] peer-focus:text-xs
// peer-valid:top-1 peer-valid:-translate-y-0 peer-valid:text-[#BDBDBD] peer-valid:text-xs
// peer-invalid:top-1 peer-invalid:-translate-y-1/2 peer-invalid:text-[#BDBDBD] peer-invalid:text-sm
