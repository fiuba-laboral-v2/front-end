import React, { FunctionComponent } from "react";
import { GraduateCareerDetail } from "../GraduateCareerDetail";
import { StudentCareerDetail } from "../StudentCareerDetail";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersDetail: FunctionComponent<ICareersDetail> = ({
  careers,
  translations,
  className,
  regularFontWeight,
  withSubjects
}) => (
  <>
    {careers?.map(applicantCareer => (
      <div key={applicantCareer.career.code} className={className}>
        {applicantCareer.isGraduate ? (
          <GraduateCareerDetail
            applicantCareer={applicantCareer}
            regularFontWeight={regularFontWeight}
            translations={translations}
          />
        ) : (
          <StudentCareerDetail
            applicantCareer={applicantCareer}
            regularFontWeight={regularFontWeight}
            translations={translations}
            withSubjects={withSubjects}
          />
        )}
      </div>
    ))}
  </>
);

interface ICareersDetail {
  careers: IApplicantCareer[];
  translations: ITranslations;
  className?: string;
  regularFontWeight?: boolean;
  withSubjects: boolean;
}
