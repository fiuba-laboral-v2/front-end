import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicant } from "$interfaces/Applicant";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { ITranslations } from "./interface";

export const ApplicantDetailContainer: FunctionComponent<IDetailContainerContainerProps> = (
  {
    applicant
  }
) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (translations.error) return <Redirect to={RoutesBuilder.public.notFound}/>;

  if (translations.loading) return <LoadingSpinner/>;

  applicant.links = applicant.links || [];
  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);

  return (
    <ApplicantDetail
      applicant={applicant}
      translations={translations.data}
    />
  );
};

interface IDetailContainerContainerProps {
  applicant: IApplicant;
}
