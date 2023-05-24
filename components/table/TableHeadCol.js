import React from "react";

const TableHeadCol = ({ children, className, divClassName }) => {
  return (
    <th scope="col" class={`px-2 py-3  ${className}`}>
      <div className={` bg-[#F6FBFD] rounded-lg p-4 font-medium text-xs ${divClassName}`}>{children}</div>
    </th>
  );
};

export default TableHeadCol;
