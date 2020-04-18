import React, { Fragment, FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANIES } from "$queries";
import { Companies } from "./component";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    translations,
    error: translationsError,
    loading: translationLoading
  } = useTranslations<string>("companyListItem");
  const {
    data: { getCompanies } = { getCompanies: [] },
    error,
    loading
  } = useQuery(GET_COMPANIES);

  if (translationsError || error) return <Fragment/>;

  return (
    <Companies
      loading={translationLoading || loading}
      companies={getCompanies}
      onClickView={id => history.push(RoutesBuilder.company.detail(id))}
      viewButtonText={translations!}
    />
  );
};

export { CompaniesContainer };
