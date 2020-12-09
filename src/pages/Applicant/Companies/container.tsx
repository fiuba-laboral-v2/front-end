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
  const data = useQuery<{}, { getCompanies: IPaginatedResult<ICompany> }>({
    query: GET_COMPANIES,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });

  return (
    <Companies
      loading={!data}
      companies={data?.getCompanies.results || []}
      onClickView={uuid => history.push(RoutesBuilder.applicant.companyProfile(uuid))}
    />
  );
};

export { CompaniesContainer };
