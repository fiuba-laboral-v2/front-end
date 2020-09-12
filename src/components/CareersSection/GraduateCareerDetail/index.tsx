import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";
import { IGraduateTranslations } from "../CareersDetail/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const GraduateCareerDetail: FunctionComponent<IGraduateCareerDetail> = (
  {
    applicantCareer,
    translations,
    regular
  }
) => (
  <>
    <b className={classNames({ [styles.regular]: regular })}>
      {translations.isGraduate}
    </b>
    {` ${translations.connector} `}
    <b className={classNames({ [styles.regular]: regular })}>
      {applicantCareer.career.description}
    </b>
  </>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: IGraduateTranslations;
  className?: string;
  regular?: boolean;
}
