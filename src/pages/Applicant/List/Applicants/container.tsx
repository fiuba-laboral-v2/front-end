import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { GET_APPLICANTS } from "$queries";
import { Applicants } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicantButtonsTranslations } from "./interface";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  const {
    translations,
    error: translationsError,
    loading: translationLoading
  } = useTranslations<IApplicantButtonsTranslations>("applicantListItem");

  const {
    data: { getApplicants } = { getApplicants: [] },
    error,
    loading
  } = useQuery(GET_APPLICANTS);
  if (error || translationsError) history.push(RoutesBuilder.notFound);

  return (
    <Applicants
      loading={loading || translationLoading}
      applicants={getApplicants}
      onClickEdit={(uuid: string) => history.push(RoutesBuilder.applicant.edit(uuid))}
      onClickView={(uuid: string) => history.push(RoutesBuilder.applicant.detail(uuid))}
      translations={translations!}
    />
  );
};


export { ApplicantsContainer };
