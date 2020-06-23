import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IApprovableCompany } from "$interfaces/Approvable";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = (
  { selectedCompany }
) => {
  const response = useCompanyByUuid(selectedCompany.uuid);
  if (response.error || response.loading) return <LoadingSpinner/>;
  return <CompanyDetailContent company={response.data.getCompanyByUuid}/>;
};

interface ICompanyDetailContentContainerProps {
  selectedCompany: IApprovableCompany;
}

export { CompanyDetailContentContainer };
