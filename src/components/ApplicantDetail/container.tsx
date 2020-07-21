import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { IApplicantDetailContainerProps, ITranslations } from "./interface";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = (
  {
    applicant,
    editButton,
    withStatusLabel
  }
) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  if (translations.loading) return <LoadingSpinner/>;

  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);

  return (
    <ApplicantDetail
      applicant={applicant}
      translations={translations.data}
      editButton={editButton}
      withStatusLabel={withStatusLabel}
    />
  );
};
