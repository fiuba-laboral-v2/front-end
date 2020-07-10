import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { AdminTaskTypeTab } from "../AdminTaskTypeTab";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { ITypeFilterProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";
import styles from "./styles.module.scss";

export const TypeFilter: FunctionComponent<ITypeFilterProps> = (
  {
    className,
    translations,
    types,
    toggleType
  }
) => (
  <section className={classNames(styles.typeFilterContainer, className)}>
    <p className={styles.title}>{translations.title}</p>
    <AdminTaskTypeTab
      className={styles.adminTaskTypeTab}
      Icon={CompanyIcon}
      color="red"
      iconTitle={translations.companyIconTitle}
      types={types}
      type={COMPANY}
      onClick={toggleType}
    />
    <AdminTaskTypeTab
      className={styles.adminTaskTypeTab}
      Icon={ApplicantIcon}
      iconTitle={translations.applicantIconTitle}
      color="blue"
      types={types}
      type={APPLICANT}
      onClick={toggleType}
    />
  </section>
);
