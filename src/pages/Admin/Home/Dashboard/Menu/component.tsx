import React, { FunctionComponent } from "react";
import { Tab } from "./Tab";
import { IMenuProps } from "./interfaces";
import { APPLICANT, COMPANY } from "$typenames";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenuProps> = (
  {
    filter,
    translations,
    addType
  }
) => (
  <div className={styles.menuContent}>
    <Tab
      selected={filter.approvableEntityTypes.includes(COMPANY)}
      type={COMPANY}
      iconTitle={translations.companyIconTitle}
      onClick={() => addType(COMPANY)}
    />
    <Tab
      selected={filter.approvableEntityTypes.includes(APPLICANT)}
      type={APPLICANT}
      iconTitle={translations.applicantIconTitle}
      onClick={() => addType(APPLICANT)}
    />
  </div>
);
