import SideBarLayout, { DemoCssVar } from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import ButtonsUsage from "@/components/pages/form-elements/ButtonsUsage";
import InputFieldUsage from "@/components/pages/form-elements/InputFieldUsage";
import PhoneNumberUsage from "@/components/pages/form-elements/PhoneNumberUsage";
import RadioUsage from "@/components/pages/form-elements/RadioUsage";
import React from "react";

const FormElements = () => {
  return (
    <AppContainer>
      <DemoCssVar />
      <PhoneNumberUsage />
      <RadioUsage />
      <ButtonsUsage />
      <InputFieldUsage />
    </AppContainer>
  );
};

FormElements.Layout = SideBarLayout;
export default FormElements;
