import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import React, { useState } from "react";
import UsageContainer from "../docs/UsageContainer";
import Button from "@/components/form-elements/Button";
import ButtonWarn from "@/components/form-elements/ButtonWarn";
import { IconChevronDown, IconChevronUp, IconDots, IconSortAZ } from "@tabler/icons-react";

const TableUsageWithStylesAndVariations = ({ data = [] }) => {
  const [sortByLatest, setSortByLatest] = useState(false);
  const handleSortByDate = (objArray) => {
    // Sort table data based on date
    return objArray?.sort((a, b) => {
      const dateA = new Date(a["date"]);
      const dateB = new Date(b["date"]);
      return sortByLatest ? dateA - dateB : dateB - dateA;
    });
  };
  let tableData = handleSortByDate(data);
  return (
    <UsageContainer title={"Table with styling and variation"}>
      <div>
        <Table>
          <TableHead className={" !uppercase !text-[red]"}>
            <TableHeadCol divClassName={"flex items-center h-12 !py-0 rounded-lg"} className={" px-2"}>
              Col 1
            </TableHeadCol>
            <TableHeadCol divClassName={"flex items-center h-12 !py-0 rounded-lg"} className={" px-2"}>
              Amount
            </TableHeadCol>
            <TableHeadCol divClassName={"flex items-center h-12 !py-0 rounded-lg text-[blue] justify-center"} className={" px-2"}>
              Date
              <div
                onClick={() => {
                  setSortByLatest((val) => !val);
                }}
                className="flex flex-col ml-4 cursor-pointer"
                title="Sort By Date"
              >
                sort-By-Date Icon
              </div>
            </TableHeadCol>
            <TableHeadCol divClassName={"flex items-center h-12 !py-0 rounded-lg"} className={" px-2"}>
              Action
            </TableHeadCol>
          </TableHead>
          <TableBody>
            {tableData?.map((el, i) => {
              return (
                <TableBodyRow className={" even:!bg-slate-100 !bg-transparent"} key={i}>
                  <TableBodyCol className={" rounded-l-2xl "}>{el.title}</TableBodyCol>
                  <TableBodyCol className={""}>{el.amount}</TableBodyCol>
                  <TableBodyCol className={" text-center"}>{el.date}</TableBodyCol>
                  <TableBodyCol className={"rounded-r-2xl  "}>
                    {el?.date == "2024" ? (
                      <Button>Dummy Action</Button>
                    ) : (
                      <ButtonWarn>
                        Action Variation
                        <IconDots className=" rotate-90" />
                      </ButtonWarn>
                    )}
                  </TableBodyCol>{" "}
                </TableBodyRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </UsageContainer>
  );
};

export default TableUsageWithStylesAndVariations;
