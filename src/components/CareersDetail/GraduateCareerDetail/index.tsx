import React, { FunctionComponent } from "react";
import { ICareerTranslations } from "../interface";
import { IApplicantCareer } from "$interfaces/Applicant";

export const GraduateCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations
  }) => (
  <>
    <b>{translations.isGraduate} </b>
    <b>{applicantCareer.career.description}</b>
  </>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: ICareerTranslations;
}
