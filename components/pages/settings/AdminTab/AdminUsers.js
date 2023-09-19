import { useState } from "react";
// import EditAddAdminUserModal from "./Modal/EditAddAdminUserModal";
import AdminUsersTable from "./AdminUsersTable";
import Button from "@/components/form-elements/Button";
import AppDialog from "@/components/app-dialog/AppDialog";
import { IconMoodEmpty } from "@tabler/icons-react";

const AdminUsers = () => {
  const userTableHeader = ["Name", "Email Address", "Role", "Date Added", "Status", "Action"];

  const users = [
    { name: "Winner", date: "25th Feb 2022", role: "Super Admin", email: "winner-pm@gmail.com", status: "active" },
    { name: "Winner", date: "25th Feb 2022", role: "Super Admin", email: "winner-pm@gmail.com", status: "active" },
    { name: "Winner", date: "25th Feb 2022", role: "Super Admin", email: "winner-pm@gmail.com", status: "active" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [userToEdit, setUserToEdit] = useState(null);

  const createAdminUserHandler = () => {
    setIsOpen(true);
    setActiveModal("EditAddAdminUserModal");
    setUserToEdit(null);
  };
  const EditAdminUserHandler = (user) => {
    setIsOpen(true);
    setActiveModal("EditAddAdminUserModal");
    setUserToEdit(user);
  };

  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        {activeModal == "EditAddAdminUserModal" && <p>Edit modal</p>}
      </AppDialog>
      <div className="flex items-center justify-between">
        <p className="text-[20px] my-2 font-semibold">Admin Users</p>

        <Button onClick={createAdminUserHandler}>Create New User</Button>
      </div>

      {users.length > 0 ? (
        <>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            {/* <Tables
              tableHeader={userTableHeader}
              adminUsers={adminUsers}
              actionLink="/events/event"
            /> */}
            <AdminUsersTable EditAdminUserHandler={EditAdminUserHandler} users={users} />
          </section>
        </>
      ) : (
        <section className="h-[60vh] mt-5 p-4 w-full bg-white rounded-[12px] flex items-center justify-center flex-col ">
          <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center bg-[#F5F5F5] ">
            {/* <img src={nouserIcon} alt="" /> */}
            <IconMoodEmpty />
          </div>
          <div className="text-[24px] font-semibold mt-3">No Email yet</div>
        </section>
      )}
    </div>
  );
};

export default AdminUsers;
