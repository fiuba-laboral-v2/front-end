import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { NumberFormatter } from "$models/NumberFormatter";

const OfferSalaryInfo: FunctionComponent<IOfferSalaryInfoProps> = ({ amount, label }) => (
  <div className={styles.salaryInfo}>
    <span className={styles.salaryInfoText}>{label}</span>
    <AttachMoneyIcon fontSize="small" />
    <span className={styles.amount}>{NumberFormatter.formatNumber(amount)}</span>
  </div>
);

interface IOfferSalaryInfoProps {
  label: string;
  amount: number;
}

export { OfferSalaryInfo };
