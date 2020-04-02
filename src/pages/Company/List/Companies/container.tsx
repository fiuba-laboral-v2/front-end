import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";
import { GET_TRANSLATIONS, GET_COMPANIES } from "$queries";
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

  if (translationsError || error) return <div/>;

  const [ viewTranslation ] = getTranslations;

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
