import AppDialog from "@/components/app-dialog/AppDialog";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import TagsV2 from "@/components/tags/TagsV2";
import React, { useState } from "react";
import ModalTxDetails from "./ModalTxDetails";
import TableSearchActions from "@/components/table/TableSearchActions";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import TabV2 from "@/components/tabs/TabV2";

const TableTransactions = () => {
  const header = ["Reference ID", "Date", "Amount", "Name", "Type", "Status", "Action"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  let filterItems = [{ name: "All Transactions (500)" }, { name: "Payouts (132)" }, { name: "Ticket Purchased (240) " }, { name: "Promotions (67)" }];

  const txs = [
    { ref: "12426578359", type: "Ticket", date: "25th Feb 2022", amount: "40,000", name: "winner-pm@gmail.com", status: "SUCCESS" },
    { ref: "12426578359", type: "Promotion", date: "25th Feb 2022", amount: "100,00", name: "winner-pm@gmail.com", status: "PENDING" },
  ];
  const onTabChange = (index) => {};
  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        <ModalTxDetails />
      </AppDialog>

      <div className=" w-full space-y-8">
        <TableSearchActions className={""} />
        <ContainerShadow>
          <TabV2 className={""} active={activeTabIndex} setActive={setActiveTabIndex} onChange={onTabChange} items={filterItems} />
        </ContainerShadow>
        <Table>
          <TableHead>
            {header.map((el, i) => {
              return <TableHeadCol key={i}>{el}</TableHeadCol>;
            })}
          </TableHead>
          <TableBody>
            {txs.map((el, i) => {
              return (
                <TableBodyRow key={i}>
                  <TableBodyCol>{el.ref}</TableBodyCol>
                  <TableBodyCol>{el.date}</TableBodyCol>
                  <TableBodyCol>{el?.amount}</TableBodyCol>
                  <TableBodyCol>{el?.name}</TableBodyCol>
                  <TableBodyCol>{el?.type}</TableBodyCol>
                  <TableBodyCol>
                    {/* <StatusTag text={el.status} bg={el?.status === "Successful" ? "green" : "red"} /> */}
                    <TagsV2 type={el?.status == "SUCCESS" ? "SUCCESS" : "PENDING"}>{el?.status}</TagsV2>
                  </TableBodyCol>
                  <TableBodyCol>
                    <button onClick={() => setIsOpen(true)} className=" underline text-blue-500">
                      View
                    </button>
                  </TableBodyCol>
                </TableBodyRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableTransactions;
