import TitleCaption from "@/components/common/TitleCaption";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import AdminUsers from "@/components/pages/settings/AdminTab/AdminUsers";
import EmailManagement from "@/components/pages/settings/EmailTab/EmailManagement";
import Financials from "@/components/pages/settings/FinancialsTab/Financials";
import RolesAndPermissions from "@/components/pages/settings/RolesAndPermsTab/RolesAndPermissions";
import Support from "@/components/pages/settings/SupportTab/Support";
import TabV2 from "@/components/tabs/TabV2";
import React, { useState } from "react";

const Settings = () => {
  let filterItems = [{ name: "Financials" }, { name: "Email Management" }, { name: "Admin Users" }, { name: "Roles & Permission" }, { name: "Support" }];
  const [filter, setFilter] = useState("Financials");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onTabChange = (index) => {};
  return (
    <AppContainer>
      <TitleCaption className={"mb-2"} title={"Settings"} />
      <ContainerShadow>
        <TabV2 className={""} active={activeTabIndex} setActive={setActiveTabIndex} onChange={onTabChange} items={filterItems} />
      </ContainerShadow>
      <div className="  my-6 ">
        {activeTabIndex == "0" && <Financials />}
        {activeTabIndex == "1" && <EmailManagement />}
        {activeTabIndex == "2" && <AdminUsers />}
        {activeTabIndex == "3" && <RolesAndPermissions />}
        {activeTabIndex == "4" && <Support />}
      </div>
    </AppContainer>
  );
};

export default Settings;
Settings.Layout = SideBarLayout;
