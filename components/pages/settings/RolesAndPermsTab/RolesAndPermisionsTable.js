import React from "react";
import { useRouter } from "next/router";
import TableHead from "@/components/table/TableHead";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableHeadCol from "@/components/table/TableHeadCol";

const RolesAndPermisionsTable = ({ data }) => {
  const header = ["Title", "Assigned Users", "Date Added", "Action"];
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
          {data.map((el, i) => {
            return (
              <TableBodyRow key={i}>
                <TableBodyCol>{el.title}</TableBodyCol>
                <TableBodyCol>{el?.usersAss}</TableBodyCol>
                <TableBodyCol>{el?.date}</TableBodyCol>
                <TableBodyCol>
                  <button className=" text-blue-500 underline" onClick={() => router.push("/settings/role-perm-details?id=13934484")}>
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

export default RolesAndPermisionsTable;
