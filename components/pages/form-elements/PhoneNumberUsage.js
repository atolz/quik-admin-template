import React, { useState, forwardRef, useEffect } from "react";
import UsageContainer from "../docs/UsageContainer";
import InputField from "@/components/form-elements/InputField";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InputFieldV2 from "@/components/form-elements-v2/InputField";
import Link from "next/link";

const CustomInputWrapperSpecialInput = forwardRef(({ ...props }, ref) => {
  console.log("input change", props.value, ref.current);
  const [clearInput, setClearInput] = useState(false);
  useEffect(() => {
    if (props.value?.length < 1) {
      setClearInput(true);
    } else {
      setClearInput(false);
    }
  }, [props.value]);
  return <InputField rootClassName=" flex-1" inputClassName=" pl-14" labelClassName="pl-12" ref={ref} label="Phone Number" clearInput={clearInput} {...props} />;
});
CustomInputWrapperSpecialInput.displayName = "CustomInputWrapper";

const PhoneNumberUsage = () => {
  const [value, setValue] = useState();

  const onValueChange = (val) => {
    console.log("value is", val);
  };
  return (
    <UsageContainer className={" bg-white"} title={"Phone Number Usage"}>
      Doc At:&nbsp;
      <Link className=" text-blue-400" href={"https://catamphetamine.gitlab.io/react-phone-number-input"}>
        https://catamphetamine.gitlab.io/react-phone-number-input
      </Link>
      <div className="flex gap-4 ">
        <UsageContainer className={"flex-1"} title={"Phone Number Usage "}>
          <PhoneInput
            className="w-full"
            placeholder="Enter phone number V2"
            value={value}
            onChange={onValueChange}
            inputComponent={forwardRef(function Wrapper({ ...props }, ref) {
              return <InputFieldV2 rootClassName=" flex-1" inputClassName=" pl-14" input ref={ref} {...props} />;
            })}
          />
        </UsageContainer>
        <UsageContainer className={"flex-1"} title={"Phone Number Usage V2"}>
          <PhoneInput className="w-full" placeholder="Enter phone number" value={value} onChange={onValueChange} inputComponent={CustomInputWrapperSpecialInput} />
        </UsageContainer>
      </div>
    </UsageContainer>
  );
};

export default PhoneNumberUsage;
