import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { AdminTaskTypeTab } from "../AdminTaskTypeTab";
import { Tab } from "../Tab";
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
  </section>
);
