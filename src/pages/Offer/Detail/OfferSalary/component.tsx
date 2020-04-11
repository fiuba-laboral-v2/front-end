import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { OfferInfoItem } from "../OfferInfoItem";

import { IOfferSalaryComponentProps } from "./interface";

const OfferSalary: FunctionComponent<IOfferSalaryComponentProps> = (
  {
    offer,
    title,
    salaryFromTranslation,
    salaryToTranslation,
    className
  }) => (
    <OfferInfoItem className={classNames(styles.salary, className)} title={title}>
      <div className={styles.SalaryInfo}>
        <div className={styles.salaryInfoText}>{salaryFromTranslation}</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.minimumSalary}</div>
      </div>
      <div className={styles.SalaryInfo}>
        <div className={styles.salaryInfoText}>{salaryToTranslation}</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.maximumSalary}</div>
      </div>
    </OfferInfoItem>
);

export { OfferSalary };
