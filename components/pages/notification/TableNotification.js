import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import TableSearchActions from "@/components/table/TableSearchActions";
import TabV2 from "@/components/tabs/TabV2";
import TagsV2 from "@/components/tags/TagsV2";
import { useRouter } from "next/router";
import React, { useState } from "react";

const TableNotification = () => {
  const header = ["Title", "Recipient", "Type", "Date", "Time", "Status", "Action"];
  const router = useRouter();

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  let filterItems = [{ name: "All (500)" }, { name: "Trash (13)" }];

  const ntfs = [
    { title: "12426578359", type: "Push Notification", date: "25th Feb 2022", time: "3:00pm", recipient: "winner-pm@gmail.com", status: "Successful" },
    { title: "12426578359", type: "In-App Notification", date: "25th Feb 2022", time: "5:00am", recipient: "winner-pm@gmail.com", status: "Failed" },
  ];
  const onTabChange = (index) => {};
  return (
    <div>
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
            {ntfs.map((el, i) => {
              return (
                <TableBodyRow key={i}>
                  <TableBodyCol>{el.title}</TableBodyCol>
                  <TableBodyCol>{el.recipient}</TableBodyCol>
                  <TableBodyCol>{el?.type}</TableBodyCol>
                  <TableBodyCol>{el?.date}</TableBodyCol>
                  <TableBodyCol>{el?.time}</TableBodyCol>
                  <TableBodyCol>
                    {/* <TagsV2 text={el.status} bg={el?.status === "Successful" ? "green" : "red"} /> */}
                    <TagsV2 type={el?.status == "SUCCESS" ? "SUCCESS" : "PENDING"}>{el?.status}</TagsV2>
                  </TableBodyCol>
                  <TableBodyCol>
                    <button
                      onClick={() => {
                        router.push("/notification/notification-details");
                      }}
                      className=" underline text-blue-500"
                    >
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

export default TableNotification;
