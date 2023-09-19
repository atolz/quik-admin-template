import React from "react";
import ContainerShadow from "../layouts/containers/ContainerShadow";
import Search from "../form-elements/Search";
import { IconAdjustments, IconEaseInControlPoint, IconFilter, IconSortAZ } from "@tabler/icons-react";

const TableSearchActions = ({ className }) => {
  return (
    <ContainerShadow className={` flex items-center !py-[18px] !px-6 gap-4 ${className}`}>
      <button className="flex items-center px-3 py-2 text-sm gap-2 border-[#BDBDBD] border  rounded-lg ">
        <IconSortAZ size={18} />
        <span className=" text-black/60">Sortby</span>
      </button>{" "}
      <button className="flex items-center px-3 py-2 text-sm gap-2 border-[#BDBDBD] border  rounded-lg ">
        <IconAdjustments size={18} />
        <span className=" text-black/60">Filters</span>
      </button>{" "}
      <Search className={" flex-1"} />
    </ContainerShadow>
  );
};

export default TableSearchActions;
