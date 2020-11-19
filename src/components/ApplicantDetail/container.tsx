import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { IApplicantDetailContainerProps, ITranslations } from "./interfaces";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = ({
  mobileLayout,
  className,
  applicant,
  editButton,
  withStatusLabel
}) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");

  return (
    <ApplicantDetail
      mobileLayout={mobileLayout}
      className={className}
      applicant={
        applicant && {
          ...applicant,
          knowledgeSections: sortBy(applicant.knowledgeSections, ["displayOrder"]),
          experienceSections: sortBy(applicant.experienceSections, ["displayOrder"])
        }
      }
      translations={translations}
      editButton={editButton}
      withStatusLabel={withStatusLabel}
    />
  );
};
