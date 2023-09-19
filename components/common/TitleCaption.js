import React from "react";

const TitleCaption = ({ title, caption, className, children }) => {
  return (
    <div className={`flex  justify-between ${className}`}>
      <div>
        <h1 className="text-[24px] mb-2 font-semibold">{title}</h1>
        <p className="text-[14px] font-semibold">{caption}</p>
      </div>
      {children}
    </div>
  );
};

export default TitleCaption;
