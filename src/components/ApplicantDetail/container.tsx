import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IApplicantDetailContainerProps, ITranslations } from "./interface";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = (
  {
    mobileLayout,
    className,
    applicant,
    editButton,
    rejectButton,
    withStatusLabel
  }
) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (!translations) return <LoadingSpinner/>;

  return (
    <ApplicantDetail
      mobileLayout={mobileLayout}
      className={className}
      applicant={{ ...applicant, sections: sortBy(applicant.sections, ["displayOrder"]) }}
      translations={translations}
      editButton={editButton}
      rejectButton={rejectButton}
      withStatusLabel={withStatusLabel}
    />
  );
};
