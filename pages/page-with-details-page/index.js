import ButtonSecondary from "@/components/form-elements/ButtonSecondary";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import { useRouter } from "next/router";
import React from "react";

const PageWithDetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This page has a link to a child page/details page</h1>
      <ButtonSecondary
        onClick={() => {
          router?.push("/page-with-details-page/12e234");
        }}
      >
        Click Me to Navigate
      </ButtonSecondary>
    </div>
  );
};

export default PageWithDetailsPage;
PageWithDetailsPage.Layout = SideBarLayout;
