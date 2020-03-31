import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import NotFound from "$pages/NotFound";
import { GET_APPLICANTS, getTranslations as GET_TRANSLATION } from "$queries";
import { Applicants } from "./component";
import { RoutesBuilder } from "$src/routesBuilder";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: translationLoading
  } = useQuery(GET_TRANSLATION, { variables: { paths: ["edit", "view"] } });
  const {
    data: { getApplicants } = { getApplicants: [] },
    error,
    loading
  } = useQuery(GET_APPLICANTS);
  if (error || translationsError) return <NotFound />;

  const [editTranslation, viewTranslation] = getTranslations;

  return (
    <Applicants
      loading={loading || translationLoading}
      applicants={getApplicants}
      onClickEdit={(uuid: string) => history.push(RoutesBuilder.applicant.edit(uuid))}
      onClickView={(uuid: string) => history.push(RoutesBuilder.applicant.detail(uuid))}
      editButtonText={editTranslation}
      viewButtonText={viewTranslation}
    />
  );
};


export { ApplicantsContainer };
