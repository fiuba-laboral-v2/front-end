import React, { Fragment, FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANIES, GET_TRANSLATIONS } from "$queries";
import { Companies } from "./component";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: translationLoading
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: ["view"] } });
  const {
    data: { getCompanies } = { getCompanies: [] },
    error,
    loading
  } = useQuery(GET_COMPANIES);

  if (translationsError || error) return <Fragment/>;

  const [viewTranslation] = getTranslations;

  return (
    <Companies
      loading={translationLoading || loading}
      companies={getCompanies}
      onClickView={id => history.push(RoutesBuilder.company.detail(id))}
      viewButtonText={viewTranslation}
    />
  );
};

export { CompaniesContainer };
