import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPInput = ({
  inputNums = 6,
  shouldAutoFocus = false,
  onChange = (val) => {},
  error = false,
  placeholder = "123456",
  inputClassName = " ",
  rootContainerClassName = " ",
  inputType = "text",
  inputProps = {},
}) => {
  const [inputVal, setInputVal] = useState("");
  const handleInputValChange = (val) => {
    console.log("OTP value is", val);
    setInputVal(val);
    onChange(val);
  };
  return (
    <OtpInput
      containerStyle={`flex flex-wrap justify-center w-max gap-y-2 ${rootContainerClassName}`}
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

      placeholder={placeholder}
      hasErrored={error}
      errorStyle={{
        outline: "1px solid red",
      }}
      shouldAutoFocus={shouldAutoFocus}
      value={inputVal}
      onChange={handleInputValChange}
      numInputs={inputNums}
      // renderSeparator={<span>&nbsp;</span>}
      renderInput={(props) => (
        <input
          {...props}
          type={inputType}
          {...inputProps}
          autoComplete="new-password"
          className={` cursor-text focus:cursor-text !h-10 !w-10 !p-0 text-base text-[#4F4F4F] placeholder:text-[#97A0AF] rounded-lg bg-[#F0F3F5] border-[#BDBDBD] border focus:shadow-none focus:ring-0 focus:border-color-primary focus:outline-none mx-1 ${inputClassName}`}
        />
      )}
    />
  );
};

export default OTPInput;
