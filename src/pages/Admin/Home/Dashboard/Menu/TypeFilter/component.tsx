import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Tab } from "../Tab";
import { CompanyIcon } from "../../Icons/CompanyIcon";
import { ApplicantIcon } from "../../Icons/ApplicantIcon";
import { OfferIcon } from "../../Icons/OfferIcon";
import { ITypeFilterComponentProps } from "./interfaces";
import { APPLICANT, COMPANY, OFFER } from "$typenames";
import styles from "./styles.module.scss";

export const TypeFilter: FunctionComponent<ITypeFilterComponentProps> = (
  {
    className,
    translations,
    types,
    toggleType
  }
) => (
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
  </section>
);
