import React, { forwardRef, useId, useRef, useState } from "react";

const TextArea = forwardRef(({ label, placeholder, inputClassName, rootClassName, labelClassName, onChange = () => {}, ...props }, ref) => {
  let inputRef = useRef(null);
  let id = useId();
  const [isDirty, setIsDirty] = useState(false);
  return (
    <div className={`relative  ${rootClassName}`}>
      <textarea
        id={id}
        className={`peer relative top-0 left-0 h-full  w-full px-3 pt-[20px] pb-[12px] text-sm text-[#4F4F4F] placeholder:text-[#97A0AF] rounded-lg bg-[#F0F3F5] border-[#BDBDBD] border focus:shadow-none focus:ring-0 focus:border-color-primary focus:outline-none ${inputClassName}`}
        rows="5"
        cols="33"
        ref={ref}
        {...props}
        onChange={(e) => {
          onChange(e);
          // console.log("chage", ref, e.target.value);
          if (e.target.value) {
            setIsDirty(true);
          } else {
            setIsDirty(false);
          }
        }}
      ></textarea>

      {label && (
        <label
          className={` absolute top-7 z-10  left-3 transition-all bg-[#F0F3F5]
          ${props.value?.length > 0 || isDirty ? " !top-1 -translate-y-0 text-[#BDBDBD] text-xs" : " top-1/2 -translate-y-[60%] text-[#828282] text-sm "}
          peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-[#BDBDBD] peer-focus:text-xs
          block ${labelClassName}`}
          for={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});

TextArea.displayName = TextArea;
export default TextArea;
