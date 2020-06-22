import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { ApprovableCompany } from "../ApprovableCompany";

const componentsByType = {
  Company: ApprovableCompany
};

export const ApprovableEntity: FunctionComponent<IApprovableEntityProps> = props => {
  const Component = componentsByType[props.approvableEntity.__typename];
  return <Component {...props}/>;
};

interface IApprovableEntityProps {
  approvableEntity: IApprovable;
}
