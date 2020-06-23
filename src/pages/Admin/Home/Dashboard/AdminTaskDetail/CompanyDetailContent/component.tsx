import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = (
  { company }
) => <CompanyDetail company={company}/>;

export interface ICompanyDetailContentProps {
  company: ICompany;
}
