import React, { useState } from "react";
import UsageContainer from "../docs/UsageContainer";
import InputField from "@/components/form-elements/InputField";
import TextArea from "@/components/form-elements/TextArea";
import OTPInput from "@/components/form-elements/OTPInput";
import InputFieldV2 from "@/components/form-elements-v2/InputField";
import TextAreaV2 from "@/components/form-elements-v2/TextArea";
import PillOnSelect from "@/components/form-elements/PillOnSelect";
import PillOnSelectV2 from "@/components/form-elements-v2/PillOnSelect-v2";
import InputDataList from "@/components/form-elements/InputDataList";
import InputTag from "@/components/form-elements/InputTag";
import InputPillsOnEnter from "@/components/form-elements/InputPillsOnEnter";
import Radio from "@/components/form-elements/Radio";

const InputFieldUsage = () => {
  let [otp, setOtp] = useState();
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-5xl">
      <UsageContainer className={" grid gap-4 flex-1"} title={"# Input Fields V1"}>
        <InputField label="Label" />

        <PillOnSelect items={["Fola", "Shade", "Juwon"]} />
        {/* <InputTag /> */}
        <InputPillsOnEnter />
        <TextArea label="Text Area" />
        <InputDataList />
        <div>
          <label>OTP Input</label>
          <OTPInput
            onChange={(val) => {
              setOtp(val);
            }}
          />
          <span className=" text-xs">on otp change: {otp}</span>
        </div>
        <div>
          <label>OTP Input Type Password - With variation</label>
          <OTPInput
            rootContainerClassName=" my-4 gap-3"
            inputClassName=" !bg-orange-200 focus:border-[red] focus:!bg-yellow-300 !h-14 !w-14 !rounded-none"
            inputType="password"
            placeholder="****"
            inputNums={4}
          />
        </div>
      </UsageContainer>
      <UsageContainer className={" flex-1 space-y-4"} title={"# Input Field V2"}>
        <InputFieldV2 label="Label v2" />
        <PillOnSelectV2 label="Pill Select V2" placeholder={"Select Character"} items={["JR", "Barney"]} />
        <TextAreaV2 label="Text Area V2" />
      </UsageContainer>
    </div>
  );
};

export default InputFieldUsage;
