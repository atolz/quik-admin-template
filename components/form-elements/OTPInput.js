import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPInput = ({ inputNums = 6, onChange = (val) => {}, error = false, placeholder = "1234" }) => {
  const [inputVal, setInputVal] = useState("");
  const handleInputValChange = (val) => {
    setInputVal(val);
    onChange(val);
  };
  return (
    <OtpInput
      containerStyle="grid gap-2 "
      inputStyle="bg-[rgba(19,124,75,0.1)] !w-[47px] h-[47px] text-base font-medium border border-solid text-color-primary rounded placeholder:text-transparent placeholder-shown:bg-white"
      //   inputStyle={{
      //     background: "white",
      //     width: "47px",
      //     height: "47px",
      //     fontFamily: "Montserrat",
      //     fontSize: "16px",
      //     border: "1px solid var(--color-border)",
      //     "border-radius": "var(--border-radius-primary)",
      //     "@media (max-width: 600px)": {
      //       height: "40px",
      //     },
      //   }}
      focusStyle={{
        outline: "1px solid var(--color-primary)",
      }}
      placeholder={placeholder}
      hasErrored={error}
      errorStyle={{
        outline: "1px solid red",
      }}
      shouldAutoFocus={true}
      value={inputVal}
      onChange={handleInputValChange}
      numInputs={inputNums}
      separator={<span>&nbsp;</span>}
    />
  );
};

export default OTPInput;
