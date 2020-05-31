import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANIES } from "$queries";
import { Companies } from "./component";
import { Redirect } from "$components/Redirect";
import { ICompany } from "$interfaces/Company";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useQuery<{}, { getCompanies: ICompany[] }>(GET_COMPANIES);

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <Companies
      loading={response.loading}
      companies={response.data?.getCompanies || []}
      onClickView={uuid => history.push(RoutesBuilder.applicant.companyProfile(uuid))}
    />
  );
};

export { CompaniesContainer };
