import React, { FunctionComponent } from "react";
import { IApplicantCareer } from "$interfaces/Applicant";
import { IGraduateTranslations } from "../CareersDetail/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const GraduateCareerDetail: FunctionComponent<IGraduateCareerDetail> = ({
  applicantCareer,
  translations,
  regularFontWeight
}) => (
  <span className={styles.detail}>
    {translations && (
      <>
        <b className={classNames({ [styles.regularFontWeight]: regularFontWeight })}>
          {translations.isGraduate}
        </b>
        {` ${translations.connector} `}
        <b className={classNames({ [styles.regularFontWeight]: regularFontWeight })}>
          {applicantCareer.career.description}
        </b>
      </>
    )}
    {!translations && " "}
  </span>
);

interface IGraduateCareerDetail {
  applicantCareer: IApplicantCareer;
  translations?: IGraduateTranslations;
  className?: string;
  regularFontWeight?: boolean;
}
