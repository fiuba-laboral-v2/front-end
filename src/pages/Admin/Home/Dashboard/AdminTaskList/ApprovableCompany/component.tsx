import React, { FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { Subtitle } from "$components/Subtitle";

export const ApprovableCompany: FunctionComponent<IApprovableCompanyProps> = (
  { approvableEntity }
) => (
  <Subtitle>
    {approvableEntity.companyName}
  </Subtitle>
);

interface IApprovableCompanyProps {
  approvableEntity: IApprovableCompany;
}
