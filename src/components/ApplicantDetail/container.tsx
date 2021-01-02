import React, { FunctionComponent, useMemo } from "react";
import { useTranslations } from "$hooks";
import { ApplicantDetail } from "./component";
import { IApplicantDetailContainerProps, ITranslations } from "./interfaces";
import { sortSections } from "../../models/sortSections";

export const ApplicantDetailContainer: FunctionComponent<IApplicantDetailContainerProps> = ({
  applicant,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  const knowledgeSections = useMemo(() => sortSections(applicant?.knowledgeSections), [applicant]);
  const experienceSections = useMemo(() => sortSections(applicant?.experienceSections), [
    applicant
  ]);

  return (
    <ApplicantDetail
      {...props}
      translations={translations}
      applicant={applicant && { ...applicant, knowledgeSections, experienceSections }}
    />
  );
};
