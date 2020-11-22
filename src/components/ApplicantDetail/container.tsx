import React, { FunctionComponent, useMemo } from "react";
import { useTranslations } from "$hooks";
import { sortBy } from "lodash";
import { ApplicantDetail } from "./component";
import { IApplicantDetailContainerProps, ITranslations } from "./interfaces";
import { ISection } from "$interfaces/Section";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = ({
  mobileLayout,
  className,
  applicant,
  editButton,
  withStatusLabel
}) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  const sortByDisplayOrder = (sections?: ISection[]) => sortBy(sections, ["displayOrder"]);
  const knowledgeSections = useMemo(() => sortByDisplayOrder(applicant?.knowledgeSections), [
    applicant
  ]);
  const experienceSections = useMemo(() => sortByDisplayOrder(applicant?.experienceSections), [
    applicant
  ]);

  return (
    <ApplicantDetail
      mobileLayout={mobileLayout}
      className={className}
      applicant={applicant && { ...applicant, knowledgeSections, experienceSections }}
      translations={translations}
      editButton={editButton}
      withStatusLabel={withStatusLabel}
    />
  );
};
