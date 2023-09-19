import React from "react";

const TableBodyCol = ({ children, className }) => {
  return <td class="px-8 py-4  first:rounded-l-lg last:rounded-r-lg">{children}</td>;
};

export default TableBodyCol;
