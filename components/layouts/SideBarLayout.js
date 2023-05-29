import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import SideBar from "./side-bar/SideBar";
import ColorInputField from "../form-elements/ColorInputField";
import AppContainer from "./containers/AppContainer";
import UsageContainer from "../pages/docs/UsageContainer";

const SideBarLayout = ({ children }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <div className=" w-screen h-screen scroll_hide overflow-hidden flex">
      <SideBar isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />
      <section className="flex-1 overflow-x-scroll scroll_hide">
        <Header isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />

        <div className=" h-[calc(100vh-_4rem)] overflow-y-scroll ">{children}</div>
      </section>
    </div>
  );
};

export default SideBarLayout;

export const DemoCssVar = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const handleColorChange = (value, type) => {
    type == "primary"
      ? (document.documentElement.style.setProperty("--color-primary", value), setPrimaryColor(value))
      : (document.documentElement.style.setProperty("--color-secondary", value), setSecondaryColor(value));
  };

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue("--color-primary");
    const colorSec = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary");

    setPrimaryColor(color);
    setSecondaryColor(colorSec);
    console.log("Color is", color);
  }, []);
  return (
    // <AppContainer className="  pb-6 pt-4 border-b mb-4">
    <UsageContainer title={"CSS Variables Usage: Demo"}>
      <h3 className=" text-color-secondary font-medium text-lg">Open the global.css to change primary color variable, any other css vars</h3>
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <div>
          <div className=" text-color-primary text-sm mb-1 font-medium">Change Primary Color</div>
          <ColorInputField rootClassName={" self-center max-w-[250px]"} value={primaryColor} onChange={(e) => handleColorChange(e.target.value, "primary")} />
        </div>

        <div>
          <div className=" text-color-secondary  text-sm mb-1 font-medium">Change Secondary Color</div>
          <ColorInputField rootClassName={" self-center max-w-[250px]"} value={secondaryColor} onChange={(e) => handleColorChange(e.target.value, "secondary")} />
        </div>
      </div>
    </UsageContainer>
    // </AppContainer>
  );
};
