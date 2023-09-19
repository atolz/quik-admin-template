import Button from "@/components/form-elements/Button";
import EmailManagementTable from "./EmailManagementTable";

const EmailManagement = () => {
  const emails = [
    { title: "12426578359", type: "Push Notification", date: "25th Feb 2022", time: "3:00pm", slug: "In-app", status: "Successful" },
    { title: "12426578359", type: "In-App Notification", date: "25th Feb 2022", time: "5:00am", slug: "In-app", status: "Failed" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[20px] my-2 font-semibold">Email Management</p>
        <Button>Create Template</Button>
      </div>

      {emails.length > 0 ? (
        <>
          <section className="mt-5 p-4 w-full bg-white rounded-md">
            {/* <Tables tableHeader={userTableHeader} email={email} actionLink="/events/event" /> */}
            <EmailManagementTable emails={emails} />
          </section>
        </>
      ) : (
        <section className="h-[60vh] mt-5 p-4 w-full bg-white rounded-[12px] flex items-center justify-center flex-col ">
          <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center bg-[#F5F5F5] ">
            <img src={"nouserIcon"} alt="" />
          </div>
          <div className="text-[24px] font-semibold mt-3">No Email yet</div>
        </section>
      )}
    </div>
  );
};

export default EmailManagement;
