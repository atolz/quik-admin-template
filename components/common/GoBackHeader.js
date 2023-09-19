import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const GoBackHeader = ({ backText = "Go Back", link = "#", className, children }) => {
  return (
    <div className={` flex items-center justify-between mb-8 ${className}`}>
      <div className=" text-black">
        <Link className=" text-base text-black flex items-center font-semibold" href={link}>
          <IconChevronLeft className=" mr-3" />
          {backText}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default GoBackHeader;
