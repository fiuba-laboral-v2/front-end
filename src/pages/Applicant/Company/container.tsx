import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByUuid } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { CompanyProfile } from "./component";

export const CompanyProfileContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useCompanyByUuid(uuid);

  if (response.error || response.loading) return <LoadingSpinner/>;

  return <CompanyProfile company={response.data.getCompanyByUuid}/>;
};
