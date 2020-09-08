import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";

export const GraduateCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations
  }) => (
  <>
    <b>{translations.isGraduate} </b>
    {translations.connector}
    <b> {applicantCareer.career.description}</b>
  </>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: {
    isGraduate: string;
    connector: string;
  };
}
