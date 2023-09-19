import React from "react";

const NameValue = ({ name, value }) => {
  return (
    <div>
      <div className=" font-semibold text-base  text-[#545F71]">{name}</div>
      <div className=" text-base font-regular text-[#27AE60]">{value}</div>
    </div>
  );
};

export default NameValue;
