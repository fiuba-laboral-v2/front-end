import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "./component";
import { IApprovableTypeTabContainerProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";

export const ApprovableTypeTabContainer: FunctionComponent<IApprovableTypeTabContainerProps> = (
  {
    iconTitle,
    onClick,
    type,
    types
  }
) => {
  const toggleSelected = () => {
    const selected = types.includes(type);
    onClick(!selected, type);
  };

  const getIcon = () => {
    if (type === COMPANY) return CompanyIcon;
    if (type === APPLICANT) return ApplicantIcon;
    throw new Error(`type: ${type} is not supported`);
  };

  const getColor = () => {
    if (type === COMPANY) return "red";
    if (type === APPLICANT) return "blue";
    throw new Error(`type: ${type} is not supported`);
  };

  return (
    <ApprovableTypeTab
      color={getColor()}
      Icon={getIcon()}
      selected={types.includes(type)}
      toggleSelected={toggleSelected}
      iconTitle={iconTitle}
    />
  );
};
