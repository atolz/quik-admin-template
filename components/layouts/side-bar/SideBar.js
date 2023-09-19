import { useRouter } from "next/router";
import React from "react";
import AppLogo from "../AppLogo";
import SideBarNav from "./SideBarNav";

const SideBar = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const router = useRouter();
  return (
    <aside
      className={` py-10 px-8 bg-black flex-grow-0 flex-shrink-0 fixed md:relative w-screen md:w-72 h-[calc(100vh-4rem)] md:h-screen bottom-0 left-0  ${
        isMobileNavOpened ? "  z-[10000000]" : " !hidden md:!block"
      }`}
    >
      <nav>
        <AppLogo className={"  hidden md:flex mb-12"}></AppLogo>
        <SideBarNav isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />
      </nav>
    </aside>
  );
};

export default SideBar;
