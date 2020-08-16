import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { IApplicantCareer } from "$interfaces/Applicant";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const translations = useTranslations<ICareerTranslations>("careersDetail");
  if (!translations) return <Fragment/>;

  const buildLabel = (
    {
      isGraduate,
      career: { description },
      approvedSubjectCount,
      currentCareerYear
    }: IApplicantCareer
  ) => {
    if (isGraduate) return `${translations.isGraduate} ${description}`;
    const yearLabel = `${currentCareerYear}° ${translations.currentCareerYear}`;
    const subjectCountLabel = `${approvedSubjectCount} ${translations.approvedSubjectCount}`;
    return `${yearLabel} ${description} (${subjectCountLabel})`;
  };

  return (
    <CareersDetail
      buildLabel={buildLabel}
      className={className}
      careers={careers}
      translations={translations}
    />
  );
};

export { CareersDetailContainer };
