import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect, useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/useTranslations";
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
      onClickView={id => history.push(RoutesBuilder.company.detail(id))}
      viewButtonText={translations.data?.view}
    />
  );
};

export { CompaniesContainer };
