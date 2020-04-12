import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";
import { OfferSalaryInfo } from "../OfferSalaryInfo";

import { IOfferSalaryProps } from "./interface";

const OfferSalary: FunctionComponent<IOfferSalaryProps> = (
  {
    offer,
    translations,
    className
  }) => (
    <OfferInfoItem className={classNames(styles.salary, className)} title={translations.title}>
      <OfferSalaryInfo
        translations={{ salaryInfoText: translations.salaryFrom }}
        salaryNumber={offer.minimumSalary}
      />
      <OfferSalaryInfo
        translations={{ salaryInfoText: translations.salaryTo }}
        salaryNumber={offer.maximumSalary}
      />
    </OfferInfoItem>
);

export { OfferSalary };
