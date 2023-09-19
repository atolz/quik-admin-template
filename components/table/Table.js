import React from "react";
import ContainerShadow from "../layouts/containers/ContainerShadow";

const Table = ({ children, tableClassName, divClassName }) => {
  return (
    <ContainerShadow className={`relative overflow-x-scroll p-4 bg-white  scroll_hide ${divClassName}`}>
      <table class={`w-full min-w-max text-sm text-left text-gray-500 dark:text-gray-400 ${tableClassName}`}>{children}</table>
    </ContainerShadow>
  );
};

export default Table;
