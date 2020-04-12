import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const OfferSalaryInfo: FunctionComponent<IOfferSalaryInfoProps> = (
  {
    salaryNumber,
    translations
  }
) => (
  <div className={styles.salaryInfo}>
    <span className={styles.salaryInfoText}>{translations.salaryInfoText}</span>
    <AttachMoneyIcon fontSize="small"/>
    <span className={styles.salaryNumber}>{salaryNumber}</span>
  </div>
);

interface IOfferSalaryInfoTranslations {
  salaryInfoText: string;
}

interface IOfferSalaryInfoProps {
  translations: IOfferSalaryInfoTranslations;
  salaryNumber: number;
}

export { OfferSalaryInfo };
