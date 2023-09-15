import React from "react";

const TagsV2 = ({ children, type = "SUCCESS" }) => {
  return (
    <div className=" text-gray-700 border border-gray-400 text-xs h-7 rounded-md flex w-max items-center justify-start pl-3 pr-4">
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
        className=" w-2 h-2 rounded-full mr-2"
      ></div>
      {children}
    </div>
  );
};

export default TagsV2;
