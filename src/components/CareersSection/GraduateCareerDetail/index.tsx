import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";
import { IGraduateTranslations } from "../CareersDetail/interfaces";

export const GraduateCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations
  }
) => (
  <>
    <b>{translations.isGraduate} </b>
    {translations.connector}
    <b> {applicantCareer.career.description}</b>
  </>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: IGraduateTranslations;
}
