import React, { Fragment, FunctionComponent } from "react";
import { CareersData } from "./component";
import { useTranslations } from "$hooks";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersDataContainer: FunctionComponent<ICareersDataContainer> = (
  {
    careers,
    className,
    withSubjects = true
  }) => {
  const translations = useTranslations<ITranslations>("careersDetailData");
  if (!translations) return <Fragment/>;

  return (
    <CareersData
      careers={careers}
      className={className}
      translations={translations}
      withSubjects={withSubjects}
    />
  );
};

interface ICareersDataContainer {
  careers: IApplicantCareer[];
  className?: string;
  withSubjects?: boolean;
}
