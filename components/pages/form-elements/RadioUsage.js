import Radio from "@/components/form-elements/Radio";
import React, { useState } from "react";
import UsageContainer from "../docs/UsageContainer";

const RadioUsage = () => {
  const [active, setActive] = useState(true);
  return (
    <UsageContainer title={"Radio Input Usage"}>
      <div className="flex justify-between max-w-max">
        <Radio
          checked={active}
          onChange={(e) => {
            console.log(e.target.value, e.target.checked);
            setActive(true);
          }}
          name="privacy"
          id="active"
        >
          Active
        </Radio>
        <Radio
          checked={!active}
          onChange={(e) => {
            console.log(e.target.value);
            setActive(false);
          }}
          name="privacy"
          id="inactive"
        >
          Inactive
        </Radio>
        {/* <input
          onChange={(e) => {
            console.log(e.target.value, e.target.checked);
          }}
          type="radio"
          value={"11"}
          name="test"
        />
        <input
          onChange={(e) => {
            console.log(e.target.value, e.target.checked);
          }}
          type="radio"
          name="test"
          value={"22"}
        /> */}
      </div>
    </UsageContainer>
  );
};

export default RadioUsage;
