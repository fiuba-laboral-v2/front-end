import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";
import { IStudentTranslations } from "../CareersDetail/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const StudentCareerDetail: FunctionComponent<IGraduateCareerDetail> = ({
  applicantCareer,
  translations,
  withSubjects,
  regularFontWeight
}) => (
  <span>
    <b className={classNames({ [styles.regularFontWeight]: regularFontWeight })}>
      {applicantCareer.currentCareerYear}° {translations.currentCareerYear}
    </b>
    {` ${translations.connector} `}
    <b className={classNames({ [styles.regularFontWeight]: regularFontWeight })}>
      {applicantCareer.career.description}
    </b>
    {withSubjects &&
      `: ${applicantCareer.approvedSubjectCount} ${translations.approvedSubjectCount}`}
  </span>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations: IStudentTranslations;
  withSubjects: boolean;
  regularFontWeight?: boolean;
}
