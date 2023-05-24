import React from "react";

const TableBodyCol = ({ children, className }) => {
  return <td class={`px-8 py-4 ${className}`}>{children}</td>;
};

export default TableBodyCol;
