import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";

import { IOfferWorkloadComponentProps } from "./interface";

const OfferWorkload: FunctionComponent<IOfferWorkloadComponentProps> = (
  {
    offer,
    translations,
    className
  }) => (
  <OfferInfoItem className={classNames(styles.workload, className)} title={translations.title}>
    <div className={styles.hoursInfo}>
      <div className={styles.hoursPerDay}>{offer.hoursPerDay}</div>
      <div className={styles.hoursPerDayText}>{translations.hoursPerDay}</div>
    </div>
  </OfferInfoItem>
);

export { OfferWorkload };
