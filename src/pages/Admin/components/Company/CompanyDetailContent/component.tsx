import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = ({
  company,
  className,
  children
}) => (
  <CompanyDetail company={company} className={className}>
    {children}
  </CompanyDetail>
);

export interface ICompanyDetailContentProps {
  company?: ICompany;
  className?: string;
}
