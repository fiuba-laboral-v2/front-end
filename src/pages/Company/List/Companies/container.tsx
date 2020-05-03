import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect, useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANIES } from "$queries";
import { Companies } from "./component";
import { ICompaniesTranslations } from "./interface";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ICompaniesTranslations>("companyListItem");
  const {
    data: { getCompanies } = { getCompanies: [] },
    error,
    loading
  } = useQuery(GET_COMPANIES);

  if (translations.error || error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <Companies
      loading={translations.loading || loading}
      companies={getCompanies}
      onClickView={uuid => history.push(RoutesBuilder.company.detail(uuid))}
      viewButtonText={translations.data?.view}
    />
  );
};

export { CompaniesContainer };
