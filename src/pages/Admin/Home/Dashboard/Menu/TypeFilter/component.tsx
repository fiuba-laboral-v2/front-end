import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "../ApprovableTypeTab";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { ITypeFilterProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";
import styles from "./styles.module.scss";

export const TypeFilter: FunctionComponent<ITypeFilterProps> = (
  {
    translations,
    types,
    toggleType
  }
) => (
  <section className={styles.typeFilterContainer}>
    <p className={styles.title}>{translations.title}</p>
    <ApprovableTypeTab
      className={styles.approvableTypeTab}
      Icon={CompanyIcon}
      color="red"
      iconTitle={translations.companyIconTitle}
      types={types}
      type={COMPANY}
      onClick={toggleType}
    />
    <ApprovableTypeTab
      className={styles.approvableTypeTab}
      Icon={ApplicantIcon}
      iconTitle={translations.applicantIconTitle}
      color="blue"
      types={types}
      type={APPLICANT}
      onClick={toggleType}
    />
  </section>
);