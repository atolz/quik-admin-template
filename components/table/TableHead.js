import React from "react";

const TableHead = ({ children, className }) => {
  return (
    <thead class={`text-xs bg-[#fff] text-color-secondary dark:bg-gray-700 dark:text-gray-400 ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHead;
