import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";
import { OfferSalaryInfo } from "../OfferSalaryInfo";

import { IOfferSalaryProps } from "./interfaces";

const OfferSalary: FunctionComponent<IOfferSalaryProps> = ({ offer, translations, className }) => (
  <OfferInfoItem className={classNames(styles.salary, className)} title={translations.salaryTitle}>
    <OfferSalaryInfo label={translations.salaryFrom} amount={offer.minimumSalary} />
    {offer.maximumSalary && (
      <OfferSalaryInfo label={translations.salaryTo} amount={offer.maximumSalary} />
    )}
  </OfferInfoItem>
);

export { OfferSalary };
