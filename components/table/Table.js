import React from "react";

const Table = ({ children }) => {
  return (
    <div class="relative overflow-x-scroll   scroll_hide ">
      <table class="w-full min-w-max text-sm text-left text-gray-500 dark:text-gray-400">{children}</table>
    </div>
  );
};

export default Table;
