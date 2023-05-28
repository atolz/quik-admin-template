import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import AppDialogUsage from "@/components/pages/docs/AppDialogUsage";
import ButtonsUsage from "@/components/pages/form-elements/ButtonsUsage";
import TableUsage from "@/components/pages/docs/TableUsage";
import React from "react";

const Docs = () => {
  return (
    <AppContainer>
      <h1>App Components and Tips to Use</h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-4 p-8 ">
        <ul className=" list-disc">
          <li>Buttons</li>
          <li>Input field</li>
          <li>Modal aka Dialog</li>
          <li>Accessable drop down</li>
          <li>Table</li>
          <li>Upload</li>
          <li>Api request</li>
          <li>Filtered or derived state</li>
          <li>Date utils</li>
          <li>Third party libs</li>
          <li>Tabs</li>
          <li>Icons</li>
        </ul>
        <div className="flex-1">
          <AppDialogUsage />
        </div>
      </div>
    </AppContainer>
  );
};

export default Docs;
Docs.Layout = SideBarLayout;
