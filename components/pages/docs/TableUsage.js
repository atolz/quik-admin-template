import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import React, { useState } from "react";
import UsageContainer from "./UsageContainer";
import TableUsageWithStylesAndVariations from "./TableUsageWithStylesAndVariations";
import ButtonWarn from "@/components/form-elements/ButtonWarn";
import Button from "@/components/form-elements/Button";

const TableUsage = () => {
  let tableHeaderCols = ["Col 1", "Col 2", "Col 3", "Action"];
  let [tableData, setTableData] = useState([
    { title: "First title", date: "2020", amount: 20 },
    { title: "First title", date: "2023", amount: 50 },
  ]);

  //   Derived/Filtered State
  //   NB: You can do multiple filtering based on condition. Maybe one filtered/derived or sorted state depending on another
  //   EG. sorting the table data by date which is then filtered by another condition (e.g amount > 30); tableData -> sortedByDate -> finalData
  //   tableData -> sortedByDate -> finalData

  let sortedDataByDate = () => {
    // Sort table data based on date
    return tableData;
  };
  let filteredData = sortedDataByDate()?.filter((el) => {
    // Filter logic
    // (e.g return amount > 30);
    return el;
  });

  //   Final derived state or data to be used in the table body
  //   i.e and array of objects or rows if how ever u choose to call it
  let finalData = filteredData;
  return (
    <div>
      <UsageContainer title={"Table usage pattern"}>
        <div>
          <div>
            <h3 className=" mb-4 font-medium text-base text-color-primary">Basic Default Table</h3>
            <Table>
              <TableHead>
                {tableHeaderCols?.map((colName, i) => {
                  return (
                    <TableHeadCol key={i}>
                      {colName}
                      {/* Pass in className for any tailwind style class u want to customize */}
                      {/* Add any extra logic or element that goes in the head col */}
                      {/* Maybe a sort button  or icon, of ur choice */}
                    </TableHeadCol>
                  );
                })}
              </TableHead>
              <TableBody>
                {finalData?.map((el, i) => {
                  return (
                    <TableBodyRow key={i}>
                      <TableBodyCol>{el.title}</TableBodyCol>
                      <TableBodyCol>{el.amount}</TableBodyCol>
                      <TableBodyCol>{el.date}</TableBodyCol>
                      <TableBodyCol>{i == 0 ? <Button>Action One</Button> : <ButtonWarn>Action Variation</ButtonWarn>}</TableBodyCol>
                    </TableBodyRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          {/* Table variation and styling usage */}
          <TableUsageWithStylesAndVariations />
        </div>
      </UsageContainer>
    </div>
  );
};

export default TableUsage;
