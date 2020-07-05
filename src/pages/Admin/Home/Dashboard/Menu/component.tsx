import React, { FunctionComponent } from "react";
import { Tab } from "./Tab";
import { CompanyIcon } from "../CompanyIcon";
import { ApplicantIcon } from "../ApplicantIcon";
import { IMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenuProps> = (
  {
    filter,
    translations,
    addEntityType
  }
) => (
  <div className={styles.menuContent}>
    <Tab
      selected={filter.approvableEntityTypes?.includes("Company") || false}
      Icon={CompanyIcon}
      iconTitle={translations.companyIconTitle}
      onClick={() => addEntityType("Company")}
    />
    <Tab
      selected={filter.approvableEntityTypes?.includes("Applicant") || false}
      Icon={ApplicantIcon}
      iconTitle={translations.applicantIconTitle}
      onClick={() => addEntityType("Applicant")}
    />
  </div>
);
