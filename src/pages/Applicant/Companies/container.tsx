import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANIES } from "$queries";
import { Companies } from "./component";
import { ICompany } from "$interfaces/Company";
import { IPaginatedResult } from "$hooks/queries/interfaces";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const companies = useQuery<{}, { getCompanies: IPaginatedResult<ICompany> }>(GET_COMPANIES, {
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getCompanies;

  return (
    <Companies
      loading={!companies}
      companies={companies?.results || []}
      createLink={uuid => RoutesBuilder.applicant.companyProfile(uuid)}
    />
  );
};

export { CompaniesContainer };
