import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";
import { getTranslations, GET_COMPANIES } from "$queries";
import { Companies } from "./component";
import Loading from "$pages/Loading";

const CompaniesContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: translationsData,
    error: translationsError,
    loading: translationLoading
  } = useQuery(getTranslations, { variables: { paths: ["view"] } });
  const { data, error, loading } = useQuery(GET_COMPANIES);

  if (translationsError || error) return <div/>;
  if (translationLoading || loading) return <Loading />;

  const [ viewTranslation ] = translationsData.getTranslations;

  return (
    <Companies
      companies={data.getCompanies}
      onClickView={id => history.push(RoutesBuilder.company.detail(id))}
      viewButtonText={viewTranslation}
    />
  );
};

export { CompaniesContainer };
