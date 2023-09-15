import React from "react";
import ContainerShadow from "../layouts/containers/ContainerShadow";

const StatCardV1 = ({ title = "title", content = "Content", color }) => {
  return (
    <ContainerShadow className={" !px-6 py-4 h-28 flex flex-col justify-between min-w-[250px]"}>
      <p className=" text-sm font-medium text-[#828282] capitalize">{title}</p>
      <p className=" text-base !font-medium mt-4 text-black">{content}</p>
    </ContainerShadow>
  );
};

export default StatCardV1;
