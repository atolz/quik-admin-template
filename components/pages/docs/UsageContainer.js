import React from "react";

const UsageContainer = ({ title, children }) => {
  return (
    <div className=" border-y p-2 mt-4 bg-slate-200">
      <h2 className=" mb-4 font-medium text-xl text-color-primary">{title}</h2>
      {children}
    </div>
  );
};

export default UsageContainer;
