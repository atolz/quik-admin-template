import TitleCaption from "@/components/common/TitleCaption";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import Tablemembers from "@/components/pages/members/Tablemembers";
import TableSearchActions from "@/components/table/TableSearchActions";
import React, { useState } from "react";

const Members = () => {
  const [users, setUsers] = useState([, 1, 23, 33, 4]);
  return (
    <AppContainer>
      <TitleCaption className={" mb-6"} title={"Members"} caption={`${users.length} Members`} />
      <Tablemembers />
    </AppContainer>
  );
};

export default Members;
Members.Layout = SideBarLayout;
