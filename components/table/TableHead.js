import React from "react";

const TableHead = ({ children }) => {
  return (
    <thead class="text-xs  uppercase bg-[#fff] text-color-secondary dark:bg-gray-700 dark:text-gray-400">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHead;
