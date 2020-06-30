import React, { FunctionComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { IMenuTranslations } from "./interfaces";
import { CompanyIcon } from "../CompanyIcon";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenu> = ({ translations }) => (
  <div className={styles.menuContent}>
    <div className={styles.company}>
      <Tooltip
        classes={{ tooltip: styles.tooltip }}
        title={translations.companyIconTitle}
        placement="right"
      >
        <CompanyIcon className={styles.companyIcon}/>
      </Tooltip>
      <p className={styles.companyDescription}>{translations.companyIconTitle}</p>
    </div>
  </div>
);

interface IMenu {
  translations: IMenuTranslations;
}
