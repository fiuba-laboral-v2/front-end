import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect, useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { GET_APPLICANTS } from "$queries";
import { Applicants } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicantButtonsTranslations } from "./interface";

const ApplicantsContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<IApplicantButtonsTranslations>("applicantListItem");

  const {
    data: { getApplicants } = { getApplicants: [] },
    error,
    loading
  } = useQuery(GET_APPLICANTS);

  if (error || translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <Applicants
      loading={loading || translations.loading}
      applicants={getApplicants}
      onClickEdit={(uuid: string) => history.push(RoutesBuilder.applicant.edit(uuid))}
      onClickView={(uuid: string) => history.push(RoutesBuilder.applicant.detail(uuid))}
      translations={translations.data}
    />
  );
};


export { ApplicantsContainer };
