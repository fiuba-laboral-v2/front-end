import React, { FunctionComponent } from "react";
import { CareersDetail } from "./component";
import { useTranslations } from "$hooks";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersDetailContainer: FunctionComponent<ICareersDetailContainer> = (
  {
    careers,
    className,
    withSubjects = true
  }
) => {
  const translations = useTranslations<ITranslations>("careersDetail");

  return (
    <>
      {
        translations &&
        <CareersDetail
          careers={careers}
          className={className}
          translations={translations}
          withSubjects={withSubjects}
        />
      }
    </>
  );
};

interface ICareersDetailContainer {
  careers: IApplicantCareer[];
  className?: string;
  withSubjects?: boolean;
}
