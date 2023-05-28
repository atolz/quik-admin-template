import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import TableUsage from "@/components/pages/docs/TableUsage";
import React from "react";

const tables = () => {
  return (
    <AppContainer>
      <div className=" max-w-6xl">
        <TableUsage />
      </div>
    </AppContainer>
  );
};

tables.Layout = SideBarLayout;
export default tables;
