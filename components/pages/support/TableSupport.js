import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import TableSearchActions from "@/components/table/TableSearchActions";
import React, { useState } from "react";
import AppDialog from "@/components/app-dialog/AppDialog";
import DropDownTicketsActionsModal from "./DropDownTicketsActionsModal";
import TagsV2 from "@/components/tags/TagsV2";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import TabV2 from "@/components/tabs/TabV2";

const TableSupport = () => {
  const header = ["Created", "Email", "CaseId", "Subject", "Priority", "Status", "Action"];
  const tickets = [
    { caseId: "12426578359", email: "winner-pm@gmail.com", created: "25th Feb 2022", priority: "Low", subject: "Account Terminated", status: "Open" },
    { caseId: "12426578359", email: "winner-pm@gmail.com", created: "25th Feb 2022", priority: "High", subject: "Account Terminated", status: "Closed" },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  let filterItems = [{ name: "All (500)" }, { name: "Open (132)" }, { name: "Closed(240) " }, { name: "High (67)" }, { name: "Low (67)" }];

  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const onTabChange = (index) => {};

  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        {activeModal == "CreateModal" && <div>Create TIcket Modal</div>}
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
            {tickets.map((el, i) => {
              return (
                <TableBodyRow key={i}>
                  <TableBodyCol>{el.created}</TableBodyCol>
                  <TableBodyCol>{el.email}</TableBodyCol>
                  <TableBodyCol>{el?.caseId}</TableBodyCol>
                  <TableBodyCol>{el?.subject}</TableBodyCol>
                  <TableBodyCol>{el?.priority}</TableBodyCol>
                  <TableBodyCol>
                    {/* <StatusTag text={el.status} bg={el?.status === "Open" ? "green" : "red"} /> */}
                    <TagsV2 type={el?.status == "Open" ? "SUCCESS" : "PENDING"}>{el?.status}</TagsV2>
                  </TableBodyCol>
                  <TableBodyCol>
                    <DropDownTicketsActionsModal tickets={el} />
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

export default TableSupport;
