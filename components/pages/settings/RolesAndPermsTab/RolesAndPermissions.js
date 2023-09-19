import React from "react";
import RolesAndPermisionsTable from "./RolesAndPermisionsTable";
import { useRouter } from "next/router";
import Button from "@/components/form-elements/Button";

const RolesAndPermissions = () => {
  const router = useRouter();
  const data = [
    { title: "12426578359", date: "25th Feb 2022", usersAss: "5" },
    { title: "12426578359", date: "25th Feb 2022", usersAss: "5" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[20px] my-2 font-semibold">Roles and Permission</p>
        {/* <Button onClick={() => navigate("/settings/roles/details")} title={"Create New Role"} solid="#01789A" /> */}
        <Button className=" " onClick={() => router.push("/settings/role-perm-details")}>
          Create New Role
        </Button>
      </div>
      <section className="mt-5 p-4 w-full bg-white rounded-md">
        <RolesAndPermisionsTable data={data} />
      </section>
    </div>
  );
};

export default RolesAndPermissions;
