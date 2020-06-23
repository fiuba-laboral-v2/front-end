import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ApprovableCompany } from "../ApprovableCompany";

export const ApprovableEntity: FunctionComponent<IApprovableEntityProps> = (
  { approvableEntity }
) => {
  if (approvableEntity.__typename === "Company") {
    return <ApprovableCompany approvableEntity={approvableEntity}/>;
  } else {
    return <></>;
  }
};

interface IApprovableEntityProps {
  approvableEntity: IApprovable;
}
