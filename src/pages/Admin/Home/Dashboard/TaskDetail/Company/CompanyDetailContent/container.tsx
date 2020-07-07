import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./component";
import { useCompanyByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";

const CompanyDetailContentContainer: FunctionComponent<ICompanyDetailContentContainerProps> = (
  {
    companyUuid
  }
) => {
  const response = useCompanyByUuid({ uuid: companyUuid });
  if (response.error || response.loading) return <LoadingSpinner/>;
  return <CompanyDetailContent company={response.data.getCompanyByUuid}/>;
};

interface ICompanyDetailContentContainerProps {
  companyUuid: string;
}

export { CompanyDetailContentContainer };
