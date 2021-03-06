import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Tab } from "../Tab";
import { CompanyIcon } from "$components/Icons/CompanyIcon";
import { ApplicantIcon } from "$components/Icons/ApplicantIcon";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";

import { ITypeFilterComponentProps } from "./interfaces";
import { APPLICANT, COMPANY, OFFER, JOB_APPLICATION } from "$typenames";
import styles from "./styles.module.scss";

export const TypeFilter: FunctionComponent<ITypeFilterComponentProps> = ({
  className,
  translations,
  types,
  toggleType
}) => (
  <section className={classNames(styles.typeFilterContainer, className)}>
    <p className={styles.title}>{translations.title}</p>
    <Tab
      className={styles.adminTaskTypeTab}
      color="red"
      selected={types.includes(COMPANY)}
      iconTitle={translations.companyIconTitle}
      Icon={CompanyIcon}
      onClick={() => toggleType(COMPANY)}
    />
    <Tab
      className={styles.adminTaskTypeTab}
      color="blue"
      selected={types.includes(APPLICANT)}
      iconTitle={translations.applicantIconTitle}
      Icon={ApplicantIcon}
      onClick={() => toggleType(APPLICANT)}
    />
    <Tab
      className={styles.adminTaskTypeTab}
      color="yellow"
      selected={types.includes(OFFER)}
      iconTitle={translations.offerIconTitle}
      Icon={OfferIcon}
      onClick={() => toggleType(OFFER)}
    />
    <Tab
      className={styles.adminTaskTypeTab}
      color="lightBlue"
      selected={types.includes(JOB_APPLICATION)}
      iconTitle={translations.jobApplicationIconTitle}
      Icon={JobApplicationIcon}
      onClick={() => toggleType(JOB_APPLICATION)}
    />
  </section>
);
