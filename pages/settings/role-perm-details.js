import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import CheckBox from "@/components/form-elements/CheckBox";
import GoBackHeader from "@/components/common/GoBackHeader";
import Button from "@/components/form-elements/Button";
import InputFieldV2 from "@/components/form-elements-v2/InputField";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";

const CategoryBox = ({
  categoryName,
  onPermissionChange = (categoryName, newPermissions) => {},
  categoryData = { title: "Dashboard", permissions: [{ title: "View dashboard", desc: "User has the ability to view the admin dashboard and filter information", active: true }] },
}) => {
  const [catData, setCatData] = useState({});

  useEffect(() => {
    setCatData(categoryData);
  }, [categoryData]);

  // Anytime a single permission changes, a new updated permissions array is created for the permission category
  const onPermissionChangeHandler = (index) => {
    const newPermissions = catData.permissions?.map((el, i) => {
      if (index == i) {
        return { ...el, active: !el.active };
      } else {
        return el;
      }
    });
    setCatData((val) => ({ ...val, permissions: newPermissions }));
    onPermissionChange(categoryName, newPermissions);
  };

  return (
    <ContainerShadow className={"flex flex-col !px-12 py-8 max-w-[939px]"}>
      <h3 className="text-2xl font-bold text-[#023E4F] mb-6">{catData.title}</h3>
      <div className="!grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-11 ">
        {catData?.permissions?.map((permission, i) => {
          return (
            <div className="max-w-[250px]" key={i}>
              <CheckBox
                value={permission?.title}
                onChange={() => {
                  onPermissionChangeHandler(i);
                }}
                checked={permission?.active}
                className={" !items-start"}
                id={permission?.title}
              >
                <div className=" cursor-pointer ml-1">
                  <span className=" text-lg leading-4 font-regular text-[#023E4F]">
                    {permission?.title}
                    {permission?.active}
                  </span>
                  <p className="mt-3 text-[#979797] text-sm">{permission?.desc}</p>
                </div>
              </CheckBox>
            </div>
          );
        })}
      </div>
    </ContainerShadow>
  );
};

const RolesAndPermisionsDetails = () => {
  const router = useRouter();
  const dasboardPermission = [{ title: "View dashboard", desc: "User has the ability to view the admin dashboard and filter information", active: true }];
  const usersPermission = [{ title: "View users", desc: "User has the ability to view the admin dashboard and filter information" }];

  const eventsPermission = [
    { title: "View events", desc: "User has the ability to view the admin dashboard and filter information", active: true },
    { title: "Flag events", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Trash events", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Edit events", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Approve events", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Compare events", desc: "User has the ability to view the admin dashboard and filter information" },
  ];
  const txsPermission = [
    { title: "View transaction", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "View transaction data", desc: "User has the ability to view the admin dashboard and filter information" },
  ];
  const logPermission = [
    { title: "View log management", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Access log data", desc: "User has the ability to view the admin dashboard and filter information" },
  ];
  const notificationPermission = [
    { title: "View notification list", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create notification", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete notification", desc: "User has the ability to view the admin dashboard and filter information" },
  ];
  const supportPermission = [
    { title: "View tickets", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create tickets", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Assign tags", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Open tickets", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Close tickets", desc: "User has the ability to view the admin dashboard and filter information" },
  ];
  const settingsPermission = [
    { title: "Edit financials", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create email template", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Edit email template", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete email template", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create admin users", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Edit admin users", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete admin users", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create role & permission", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Edit role & permission", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete role & permission", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create support tag", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete support tag", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Create priority", desc: "User has the ability to view the admin dashboard and filter information" },
    { title: "Delete priority", desc: "User has the ability to view the admin dashboard and filter information" },
  ];

  const [permissionsCategory, setPermissionsCategory] = useState({
    dashboard: {
      title: "Dashboard",
      permissions: dasboardPermission,
    },
    user: {
      title: "Users",
      permissions: usersPermission,
    },
    event: {
      title: "Events",
      permissions: eventsPermission,
    },
    txs: {
      title: "Transaction History",
      permissions: txsPermission,
    },
    log: {
      title: "Log Management",
      permissions: logPermission,
    },
    notification: {
      title: "Notification Management",
      permissions: notificationPermission,
    },
    support: {
      title: "Support",
      permissions: supportPermission,
    },
    settings: {
      title: "Settings",
      permissions: settingsPermission,
    },
  });
  const [create, setCreate] = useState(true);
  const onPermissionChange = (category, newCategoryPermissions) => {
    // Anytime a single permission changes, a new updated permissions array is created for the permission category
    console.log(`On permission change. Name: ${category}. NewPermissions:`, newCategoryPermissions);
    setPermissionsCategory((val) => {
      return { ...val, [category]: { ...val[category], permissions: newCategoryPermissions } };
    });
  };

  useEffect(() => {
    if (router.query.id) {
      setCreate(false);
    }
  }, [router.query.id]);
  return (
    <AppContainer>
      <GoBackHeader link="/settings/" />

      <section className=" max-w-[939px] mx-auto">
        <div className="flex items-center justify-between my-10">
          <p className="text-[20px] my-2 font-semibold">{create ? "Create" : "Edit"} Role</p>
          <Button>Save</Button>
        </div>
        <div className=" mb-10 max-w-[374px]">
          <InputFieldV2 value={create ? "" : "Admin"} label="Role Title" />
        </div>

        <div className=" space-y-4">
          {Object.entries(permissionsCategory)?.map(([key, value], i) => {
            return <CategoryBox categoryName={key} categoryData={value} onPermissionChange={onPermissionChange} key={i} />;
          })}
        </div>
      </section>
    </AppContainer>
  );
};

export default RolesAndPermisionsDetails;
RolesAndPermisionsDetails.Layout = SideBarLayout;
