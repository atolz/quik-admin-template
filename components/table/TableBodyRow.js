import React from "react";

const TableBodyRow = ({ children, className }) => {
  return <tr class={`bg-white dark:bg-gray-800 text-sm font-normal text-color-primary ${className}`}>{children}</tr>;
};

export default TableBodyRow;
