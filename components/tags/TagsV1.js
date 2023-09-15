import React from "react";

const TagsV1 = ({ children, type = "SUCCESS" }) => {
  return (
    <div
      style={{
        backgroundColor: (() => {
          if (type == "PENDING") {
            return "#F2994A";
          }
          if (type == "SUCCESS") {
            return "#27AE60";
          }
        })(),
      }}
      className=" text-white text-xs h-6 rounded-md flex w-max items-center justify-center px-4"
    >
      {children}
    </div>
  );
};

export default TagsV1;
