import React from "react";

const Table = ({ children, tableClassName, divClassName }) => {
  return (
    <div class={`relative overflow-x-scroll   scroll_hide ${divClassName}`}>
      <table class={`w-full min-w-max text-sm text-left text-gray-500 dark:text-gray-400 ${tableClassName}`}>{children}</table>
    </div>
  );
};

export default Table;
