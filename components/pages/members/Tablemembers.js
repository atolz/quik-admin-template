import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyCol from "@/components/table/TableBodyCol";
import TableBodyRow from "@/components/table/TableBodyRow";
import TableHead from "@/components/table/TableHead";
import TableHeadCol from "@/components/table/TableHeadCol";
import TableSearchActions from "@/components/table/TableSearchActions";
import TagsV2 from "@/components/tags/TagsV2";
import React from "react";
import DropDownUserActionsModal from "./DropDownUserActionsModal";

const Tablemembers = () => {
  const header = ["Name", "Phone Number", "Email", "Gender", "Status", "Action"];
  const users = [
    {
      name: "Winner Oguns",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: true,
      gender: "female",
    },
    {
      name: "Winner Oguns",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: false,
      gender: "female",
    },
    {
      name: "Amoda Ogunlere",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: true,
      gender: "male",
    },
    {
      name: "Winner Oguns",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: true,
      gender: "female",
    },
    {
      name: "Winner Oguns",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: false,
      gender: "female",
    },
    {
      name: "Winner Oguns",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: true,
      gender: "female",
    },
    {
      name: "Wasiu Ayinde ",
      phone: "09076782234",
      email: "winnersoguns@gmail.com",
      isActive: false,
      gender: "male",
    },
  ];
  return (
    <div>
      <TableSearchActions className={"mb-8"} />

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
                <TableBodyCol>{el.name}...</TableBodyCol>
                <TableBodyCol>{el.phone}</TableBodyCol>
                <TableBodyCol>{el?.email}</TableBodyCol>
                <TableBodyCol>{el?.gender}</TableBodyCol>
                <TableBodyCol>
                  <TagsV2 type={el?.isActive ? "SUCCESS" : "PENDING"}>{el?.isActive ? "Active" : "Inactive"}</TagsV2>
                  {/* <TagsV2 text={el.status} bg={el?.status === "Active" ? "green" : "red"} /> */}
                </TableBodyCol>
                <TableBodyCol>
                  <DropDownUserActionsModal user={el} />
                </TableBodyCol>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tablemembers;
