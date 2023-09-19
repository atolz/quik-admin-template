import React from "react";

const TableBodyRow = ({ children, className }) => {
  return <tr class="bg-white dark:bg-gray-800 text-sm font-semibold  text-[rgba(18,21,40,0.77)] odd:bg-[#F5F5F5] ">{children}</tr>;
};

export default TableBodyRow;
