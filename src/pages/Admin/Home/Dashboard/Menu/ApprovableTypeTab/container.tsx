import React, { FunctionComponent, useState } from "react";
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
  const [selected, setSelected] = useState(types.includes(type));
  const toggleSelected = () => {
    setSelected(!selected);
    onClick(!selected, type);
  };

  const getIcon = () => {
    if (type === COMPANY) return CompanyIcon;
    if (type === APPLICANT) return ApplicantIcon;
    throw new Error(`type: ${type} is not supported`);
  };

  return (
    <ApprovableTypeTab
      Icon={getIcon()}
      selected={selected}
      toggleSelected={toggleSelected}
      iconTitle={iconTitle}
    />
  );
};
