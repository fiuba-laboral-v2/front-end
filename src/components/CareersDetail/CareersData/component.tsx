import React, { FunctionComponent, Fragment } from "react";
import { GraduateCareerDetail } from "../GraduateCareerDetail";
import { StudentCareerDetail } from "../StudentCareerDetail";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersData: FunctionComponent<ICareersData> = (
  {
    careers,
    translations,
    className,
    withSubjects
  }) => (
  <Fragment>
    {
      careers?.map((applicantCareer, index) =>
        <div key={index} className={className}>
          {applicantCareer.isGraduate ?
            <GraduateCareerDetail
              applicantCareer={applicantCareer}
              translations={translations}
            />
            :
            <StudentCareerDetail
              applicantCareer={applicantCareer}
              translations={translations}
              withSubjects={withSubjects}
            />
          }
        </div>
      )
    }
  </Fragment>
);

interface ICareersData {
  careers: IApplicantCareer[];
  translations: ITranslations;
  className?: string;
  withSubjects: boolean;
}
