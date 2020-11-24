import React, { FunctionComponent } from "react";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersDetailContainer: FunctionComponent<ICareersDetailContainer> = ({
  careers,
  className,
  regularFontWeight,
  withSubjects
}) => {
  const translations = useTranslations<ITranslations>("careersDetail");

  return (
    <CareersDetail
      careers={careers}
      className={className}
      regularFontWeight={regularFontWeight}
      translations={translations}
      withSubjects={withSubjects}
    />
  );
};

interface ICareersDetailContainer {
  careers: IApplicantCareer[];
  className?: string;
  studentClassName?: string;
  graduateClassName?: string;
  withSubjects: boolean;
  regularFontWeight: boolean;
}
