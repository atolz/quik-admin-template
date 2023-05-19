import React from "react";

const TableHeadCol = ({ children }) => {
  return (
    <th scope="col" class="px-2 py-3 ">
      <div className=" bg-[#F6FBFD] rounded-lg p-4 font-medium text-xs">{children}</div>
    </th>
  );
};

export default TableHeadCol;
