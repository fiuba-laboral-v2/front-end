import React, { FunctionComponent } from "react";
import { Tab } from "./component";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { ITabContainerProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";

export const TabContainer: FunctionComponent<ITabContainerProps> = (
  {
    type,
    iconTitle,
    onClick,
    selected
  }
) => {
  const getIcon = () => {
    if (type === COMPANY) return CompanyIcon;
    if (type === APPLICANT) return ApplicantIcon;
    throw new Error(`type ${type} is nos supported`);
  };

  return (
    <Tab
      selected={selected}
      iconTitle={iconTitle}
      Icon={getIcon()}
      onClick={onClick}
    />
  );
};
