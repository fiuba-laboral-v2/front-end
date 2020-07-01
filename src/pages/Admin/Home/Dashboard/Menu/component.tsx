import React, { FunctionComponent } from "react";
import { IMenuTranslations } from "./interfaces";
import { Tab } from "./Tab";
import { CompanyIcon } from "../CompanyIcon";
import { ApplicantIcon } from "../ApplicantIcon";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenu> = ({ translations }) => (
  <div className={styles.menuContent}>
    <Tab Icon={CompanyIcon} iconTitle={translations.companyIconTitle}/>
    <Tab Icon={ApplicantIcon} iconTitle={translations.applicantIconTitle}/>
  </div>
);

interface IMenu {
  translations: IMenuTranslations;
}
