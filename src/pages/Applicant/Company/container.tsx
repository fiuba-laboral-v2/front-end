import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { GET_COMPANY_BY_UUID } from "$queries";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { CompanyProfile } from "./component";

import { ICompany } from "$interfaces/Company";

export const CompanyProfileContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useQuery<{}, { getCompanyByUuid: ICompany }>(
    GET_COMPANY_BY_UUID,
    { variables: { uuid } }
  );

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <CompanyProfile company={response.data.getCompanyByUuid}/>;
};
