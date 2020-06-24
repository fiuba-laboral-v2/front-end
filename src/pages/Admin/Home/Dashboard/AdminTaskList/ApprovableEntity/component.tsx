import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ApprovableCompany } from "../ApprovableCompany";

export const ApprovableEntity: FunctionComponent<IApprovableEntityProps> = (
  { approvableEntity }
) => <>
  {
    approvableEntity.__typename === "Company" &&
    <ApprovableCompany approvableEntity={approvableEntity}/>
  }
</>;

interface IApprovableEntityProps {
  approvableEntity: IApprovable;
}
