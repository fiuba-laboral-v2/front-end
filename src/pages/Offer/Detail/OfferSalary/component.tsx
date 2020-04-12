import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { OfferInfoItem } from "../OfferInfoItem";

import { IOfferSalaryProps } from "./interface";

const OfferSalary: FunctionComponent<IOfferSalaryProps> = (
  {
    offer,
    translations,
    className
  }) => (
    <OfferInfoItem className={classNames(styles.salary, className)} title={translations.title}>
      <div className={styles.SalaryInfo}>
        <div className={styles.salaryInfoText}>{translations.salaryFrom}</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.minimumSalary}</div>
      </div>
      <div className={styles.SalaryInfo}>
        <div className={styles.salaryInfoText}>{translations.salaryTo}</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.maximumSalary}</div>
      </div>
    </OfferInfoItem>
);

export { OfferSalary };
