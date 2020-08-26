import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "$components/OfferInfoItem";

import { IOfferWorkloadComponentProps } from "./interface";

export const OfferWorkload: FunctionComponent<IOfferWorkloadComponentProps> = (
  {
    offer,
    translations,
    className
  }) => (
  <OfferInfoItem className={classNames(styles.workload, className)} title={translations.title}>
    <div className={styles.hoursInfo}>
      <span className={styles.hoursPerDay}>{offer.hoursPerDay}</span>
      <span className={styles.hoursPerDayText}>{translations.hoursPerDay}</span>
    </div>
  </OfferInfoItem>
);
