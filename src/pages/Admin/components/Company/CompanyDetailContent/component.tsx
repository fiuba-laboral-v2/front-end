import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = ({
  company,
  className,
  children
}) => (
  <CompanyDetail
    company={company}
    className={className}
    link={company && RoutesBuilder.admin.companyDetail(company?.uuid)}
  >
    {children}
  </CompanyDetail>
);

export interface ICompanyDetailContentProps {
  company?: ICompany;
  className?: string;
}
