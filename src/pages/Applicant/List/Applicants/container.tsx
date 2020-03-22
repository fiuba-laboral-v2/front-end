import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import NotFound from "$pages/NotFound";
import { GET_APPLICANTS, getTranslations } from "$queries";
import Loading from "$pages/Loading";
import { Applicants } from "./component";
import { RoutesBuilder } from "$src/routesBuilder";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: translationsData,
    error: translationsError,
    loading: translationLoading
  } = useQuery(getTranslations, { variables: { paths: ["edit", "view"] } });
  const { data, error, loading } = useQuery(GET_APPLICANTS);
  if (error || translationsError) return <NotFound/>;
  if (loading || translationLoading) return <Loading />;

  const [ editTranslation, viewTranslation ] = translationsData.getTranslations;

  return (
    <Applicants
      applicants={data.getApplicants}
      onClickEdit={(padron: number) => history.push(RoutesBuilder.applicant.edit(padron))}
      onClickView={(padron: number) => history.push(RoutesBuilder.applicant.detail(padron))}
      editButtonText={editTranslation}
      viewButtonText={viewTranslation}
    />
  );
};


export { ApplicantsContainer };
