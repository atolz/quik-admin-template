import React, { forwardRef, useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const ColorInputField = forwardRef(({ value = "#9B51E0", onChange = () => {}, inputClassName, rootClassName, ...props }, ref) => {
  const [inputText, setInputText] = useState(value);
  const inputRef = useRef(null);

  const onInputColorText = (e) => {
    let value = e.target.value;
    value.length <= 7 && setInputText(value);
    if (value.length == 7) {
      inputRef.current.value = value;
    }
  };

  const handleColorChange = (e) => {
    let value = e.target.value;
    onChange(e);
    setInputText(value);
    ref ? (ref.current.value = value) : (inputRef.current.value = value);
  };

  useEffect(() => {
    setInputText(value);
  }, [value]);
  return (
    <InputField
      {...props}
      ref={ref || inputRef}
      type="color"
      inputClassName={`!pr-[95%] !py-5  w-0  overflow-hidden ${inputClassName}`}
      rootClassName={`${rootClassName}`}
      value={value}
      onChange={handleColorChange}
      style={{
        backgroundPosition: "right .5rem center",
        backgroundSize: "1.5em 1.5em",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1084_16103)'%3E%3Cpath d='M3.76669 15.5605L7.22669 19.0205C9.65669 21.4505 10.4867 21.4105 12.8867 19.0205L18.4567 13.4505C20.3967 11.5105 20.8867 10.2205 18.4567 7.79045L14.9967 4.33045C12.4067 1.74045 11.2767 2.39045 9.33669 4.33045L3.76669 9.90045C1.37669 12.3005 1.17669 12.9705 3.76669 15.5605Z' stroke='%23828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath opacity='0.4' d='M19.1995 16.7895L18.5395 17.8795C17.6095 19.4295 18.3295 20.6995 20.1395 20.6995C21.9495 20.6995 22.6695 19.4295 21.7395 17.8795L21.0795 16.7895C20.5595 15.9295 19.7095 15.9295 19.1995 16.7895Z' stroke='%23828282' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath opacity='0.4' d='M2 12.2398C7.56 10.7298 13.42 10.6798 19 12.1098L19.5 12.2398' stroke='%23292D32' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1084_16103'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
        // backgroundImage: `url("/paintbucket.svg")`, also valid
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex items-center absolute h-10  -translate-y-1/2 top-1/2 left-3">
        <div
          onClick={() => {
            console.log("inut ref", inputRef);
            ref ? ref?.current.click() : inputRef?.current.click();
          }}
          style={{ backgroundColor: inputText }}
          className=" h-7 w-7 rounded-full mr-3 cursor-pointer"
        ></div>
        <input value={inputText} onChange={onInputColorText} className="max-w-[80px] outline-none bg-transparent pr-2"></input>
      </div>
    </InputField>
  );
});

export default ColorInputField;

ColorInputField.displayName = "ColorInputField";
