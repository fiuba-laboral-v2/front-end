import React, { FunctionComponent } from "react";
import { ApprovableTypeTab } from "../ApprovableTypeTab";
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
      iconTitle={translations.companyIconTitle}
      types={types}
      type={COMPANY}
      onClick={toggleType}
    />
    <ApprovableTypeTab
      iconTitle={translations.companyIconTitle}
      types={types}
      type={APPLICANT}
      onClick={toggleType}
    />
  </section>
);
