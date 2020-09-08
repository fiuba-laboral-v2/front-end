import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";
import { IStudentTranslations } from "../CareersData/interfaces";

export const StudentCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations,
    withSubjects
  }) => (
  <span>
    <b>{applicantCareer.currentCareerYear}° {translations.currentCareerYear} </b>
    {translations.connector}
    <b> {applicantCareer.career.description} </b>
    {withSubjects &&
      `${applicantCareer.approvedSubjectCount} ${translations.approvedSubjectCount}`
    }
  </span>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: IStudentTranslations;
  withSubjects: boolean;
}
