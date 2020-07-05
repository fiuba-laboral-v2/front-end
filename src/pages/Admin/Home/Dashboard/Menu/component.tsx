import React, { FunctionComponent } from "react";
import { Tab } from "./Tab";
import { CompanyIcon } from "../CompanyIcon";
import { ApplicantIcon } from "../ApplicantIcon";
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
      Icon={CompanyIcon}
      iconTitle={translations.companyIconTitle}
      onClick={() => addType(COMPANY)}
    />
    <Tab
      selected={filter.approvableEntityTypes.includes(APPLICANT)}
      Icon={ApplicantIcon}
      iconTitle={translations.applicantIconTitle}
      onClick={() => addType(APPLICANT)}
    />
  </div>
);
