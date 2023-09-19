import TitleCaption from "@/components/common/TitleCaption";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import TableTransactions from "@/components/pages/Transactions/TableTransactions";
import React from "react";

const Transactions = () => {
  return (
    <AppContainer>
      <TitleCaption className={" mb-6"} title={"Transaction Management"} caption={`2 Transaction`} />
      <TableTransactions />
    </AppContainer>
  );
};

export default Transactions;
Transactions.Layout = SideBarLayout;
