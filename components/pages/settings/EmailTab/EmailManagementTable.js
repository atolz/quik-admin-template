import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import { useRouter } from "next/router";
import React from "react";

const EmailManagementTable = ({ emails }) => {
  const header = ["Title", "Slug", "Type", "Date", "Time", "Action"];
  const router = useRouter();

  return (
    <div className=" w-full ">
      <Table>
        <TableHead>
          {header.map((el, i) => {
            return <TableHeadCol key={i}>{el}</TableHeadCol>;
          })}
        </TableHead>
        <TableBody>
          {emails.map((el, i) => {
            return (
              <TableBodyRow key={i}>
                <TableBodyCol>{el.title}</TableBodyCol>
                <TableBodyCol>{el?.slug}</TableBodyCol>
                <TableBodyCol>{el.type}</TableBodyCol>
                <TableBodyCol>{el?.date}</TableBodyCol>
                <TableBodyCol>{el?.time}</TableBodyCol>

                <TableBodyCol>
                  <button className=" text-blue-500 underline" onClick={() => router.push("/settings/email-management/details")}>
                    View
                  </button>
                </TableBodyCol>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmailManagementTable;
