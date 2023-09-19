import TitleCaption from "@/components/common/TitleCaption";
import Button from "@/components/form-elements/Button";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import TableSupport from "@/components/pages/support/TableSupport";
import React from "react";

const Support = () => {
  return (
    <AppContainer>
      <TitleCaption className={" mb-6"} title={"Support"} caption={`5 Ticket`}>
        <Button>Create Ticket</Button>
      </TitleCaption>
      <TableSupport />
    </AppContainer>
  );
};

export default Support;
Support.Layout = SideBarLayout;
