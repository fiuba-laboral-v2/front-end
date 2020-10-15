import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IApplicantDetailContainerProps, ITranslations } from "./interface";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = ({
  mobileLayout,
  className,
  applicant,
  editButton,
  withStatusLabel
}) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (!translations) return <LoadingSpinner />;

  return (
    <ApplicantDetail
      mobileLayout={mobileLayout}
      className={className}
      applicant={{
        ...applicant,
        knowledgeSections: sortBy(applicant.knowledgeSections, ["displayOrder"]),
        experienceSections: sortBy(applicant.experienceSections, ["displayOrder"])
      }}
      translations={translations}
      editButton={editButton}
      withStatusLabel={withStatusLabel}
    />
  );
};
