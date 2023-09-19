import TitleCaption from "@/components/common/TitleCaption";
import Button from "@/components/form-elements/Button";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import TableNotification from "@/components/pages/notification/TableNotification";
import { useRouter } from "next/router";
import React from "react";

const NotificationManagement = () => {
  const router = useRouter();
  return (
    <AppContainer>
      <TitleCaption className={" mb-6"} title={"Notifications Management"} caption={`2 Notification`}>
        <Button
          onClick={() => {
            router.push("/notification/create");
          }}
        >
          Create
        </Button>
      </TitleCaption>
      <TableNotification />
    </AppContainer>
  );
};

export default NotificationManagement;
NotificationManagement.Layout = SideBarLayout;
