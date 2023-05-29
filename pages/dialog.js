import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppDialogUsage from "@/components/pages/docs/AppDialogUsage";
import React from "react";

const Dialog = () => {
  return (
    <div className="flex-1">
      <AppDialogUsage />
    </div>
  );
};

export default Dialog;
Dialog.Layout = SideBarLayout;
