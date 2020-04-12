import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { GET_APPLICANTS, GET_TRANSLATIONS } from "$queries";
import { Applicants } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: translationLoading
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: ["edit", "view"] } });
  const {
    data: { getApplicants } = { getApplicants: [] },
    error,
    loading
  } = useQuery(GET_APPLICANTS);
  if (error || translationsError) history.push(RoutesBuilder.notFound);

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
