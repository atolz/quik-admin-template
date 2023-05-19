import React from "react";
import InputField from "./InputField";

const TimePicker = ({ ...props }) => {
  return (
    <InputField
      type="time"
      step="300"
      style={{
        backgroundPosition: "right .5rem center",
        backgroundSize: "1.5em 1.5em",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23828282' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E%0A")`,
      }}
      {...props}
    />
  );
};

export default TimePicker;
