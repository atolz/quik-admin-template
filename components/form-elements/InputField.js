import React, { forwardRef, useEffect, useId, useRef, useState } from "react";

const InputField = forwardRef(({ label, onChange = () => {}, inputClassName, rootClassName, labelClassName, children = () => {}, ...props }, ref) => {
  let inputRef = useRef(null);
  let inputId = useId();
  const [isDirty, setIsDirty] = useState(false);
  // console.log("renderinpute", ref?.current?.value);
  // useEffect(() => {
  //   if (props.value?.length) {
  //     setIsDirty(true);
  //   } else {
  //     setIsDirty(false);
  //   }
  // }, [props.value]);

  return (
    <div
      onClick={() => {
        if (!props.disabled) {
          ref ? ref?.current?.showPicker() : inputRef?.current?.showPicker();
        }
      }}
      className={`relative h-12 cursor-text ${rootClassName}`}
    >
      <input
        onInput={() => {
          console.log("on input called");
        }}
        onBlur={(e) => {
          console.log("on blure callesd", e.target.value);
        }}
        onChange={(e) => {
          onChange(e);
          // console.log("chage", e.target.value, ref, inputRef.current);
          console.log("on changes");
          if (e.target.value.length > 0) {
            // console.log("setting true");
            setIsDirty((val) => true);
          } else {
            setIsDirty((val) => false);
          }
        }}
        id={inputId}
        {...props}
        className={` cursor-text focus:cursor-text peer absolute top-0 left-0 h-full  w-full px-3 pt-[26px] pb-[12px] text-sm text-[#4F4F4F] placeholder:text-[#97A0AF] rounded-lg bg-[#F0F3F5] border-[#BDBDBD] border focus:shadow-none focus:ring-0 focus:border-color-primary focus:outline-none ${inputClassName}`}
        ref={ref || inputRef}
        placeholder=""
      />
      {label && (
        <label
          htmlFor={inputId}
          className={` absolute cursor-text  left-3 transition-all
          ${props.value?.length > 0 || isDirty ? " top-1 -translate-y-0 text-[#BDBDBD] text-xs" : " top-1/2 -translate-y-1/2 text-[#828282] text-sm "}
          peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[#BDBDBD] peer-focus:text-xs
          block ${labelClassName}`}
          // for={props.name}
        >
          {label}
        </label>
      )}
      {typeof children == "function" ? children({ inputRef }) : children}
    </div>
  );
});

InputField.displayName = InputField;
export default InputField;

// peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[#BDBDBD] peer-focus:text-xs
// peer-valid:top-1 peer-valid:-translate-y-0 peer-valid:text-[#BDBDBD] peer-valid:text-xs
// peer-invalid:top-1 peer-invalid:-translate-y-1/2 peer-invalid:text-[#BDBDBD] peer-invalid:text-sm
