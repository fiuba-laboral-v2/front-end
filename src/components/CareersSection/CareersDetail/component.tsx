import React, { FunctionComponent } from "react";
import { GraduateCareerDetail } from "../GraduateCareerDetail";
import { StudentCareerDetail } from "../StudentCareerDetail";
import { IApplicantCareer } from "$interfaces/Applicant";
import { ITranslations } from "./interfaces";

export const CareersDetail: FunctionComponent<ICareersDetail> = (
  {
    careers,
    translations,
    className,
    regular,
    withSubjects
  }
) => (
  <>
    {
      careers?.map(applicantCareer =>
        <div key={applicantCareer.career.code} className={className}>
          {applicantCareer.isGraduate ?
            <GraduateCareerDetail
              applicantCareer={applicantCareer}
              regular={regular}
              translations={translations}
            />
            :
            <StudentCareerDetail
              applicantCareer={applicantCareer}
              regular={regular}
              translations={translations}
              withSubjects={withSubjects}
            />
          }
        </div>
      )
    }
  </>
);

interface ICareersDetail {
  careers: IApplicantCareer[];
  translations: ITranslations;
  className?: string;
  regular?: boolean;
  withSubjects: boolean;
}
