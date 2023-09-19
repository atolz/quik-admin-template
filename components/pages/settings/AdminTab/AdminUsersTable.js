import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import TagsV2 from "@/components/tags/TagsV2";
import React from "react";
// import { ActionModal } from "../../component/componentHelpers/Tags/Tags.component";

const AdminUsersTable = ({ users = [], EditAdminUserHandle = () => {} }) => {
  const header = ["Name", "Email Address", "Role", "Date Added", "Status", "Action"];

  return (
    <div className=" w-full ">
      <Table>
        <TableHead>
          {header.map((el, i) => {
            return <TableHeadCol key={i}>{el}</TableHeadCol>;
          })}
        </TableHead>
        <TableBody>
          {users.map((el, i) => {
            return (
              <TableBodyRow key={i}>
                <TableBodyCol>{el.name}</TableBodyCol>
                <TableBodyCol>{el?.email}</TableBodyCol>
                <TableBodyCol>{el?.role}</TableBodyCol>
                <TableBodyCol>{el?.date}</TableBodyCol>
                <TableBodyCol>
                  <TagsV2 type={el?.status === "Pending" ? "PENDING" : "SUCCESS"}>{el.status}</TagsV2>
                </TableBodyCol>
                <TableBodyCol>
                  <button onClick={EditAdminUserHandle.bind(this, { name: "" })} className=" text-blue-500 underline">
                    Edit
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

export default AdminUsersTable;
