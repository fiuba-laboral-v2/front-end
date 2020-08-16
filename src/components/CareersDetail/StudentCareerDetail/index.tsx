import React, { FunctionComponent } from "react";
import { ICareerTranslations } from "../interface";
import { IApplicantCareer } from "$interfaces/Applicant";

export const StudentCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations
  }) => (
  <span>
    <b>{applicantCareer.currentCareerYear}° {translations.currentCareerYear} </b>
    {translations.connector}
    <b> {applicantCareer.career.description} </b>
    ({applicantCareer.approvedSubjectCount} {translations.approvedSubjectCount})
  </span>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: ICareerTranslations;
}
