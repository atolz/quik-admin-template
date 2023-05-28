import React from "react";

const TableHeadCol = ({ children, className, divClassName }) => {
  return (
    <th scope="col" class={`  ${className}`}>
      <div className={` bg-[#F6FBFD]  p-4 font-medium text-xs ${divClassName}`}>{children}</div>
    </th>
  );
};

export default TableHeadCol;
