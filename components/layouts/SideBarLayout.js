import React, { useState } from "react";
import Header from "./header/Header";
import SideBar from "./side-bar/SideBar";

const SideBarLayout = ({ children }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <div className=" w-screen h-screen scroll_hide overflow-hidden flex">
      <SideBar isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />
      <section className="flex-1 ">
        <Header isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />
        <div>{children}</div>
      </section>
    </div>
  );
};

export default SideBarLayout;
