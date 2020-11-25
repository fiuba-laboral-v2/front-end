import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = ({
  company,
  className
}) => <CompanyDetail company={company} className={className} />;

export interface ICompanyDetailContentProps {
  company?: ICompany;
  className?: string;
}
