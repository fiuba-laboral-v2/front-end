import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { OfferSalary } from "$components/OfferSalary";
import { OfferCareers } from "$components/OfferCareers";
import { OfferWorkload } from "$components/OfferWorkload";
import { OfferTargetApplicantType } from "$components/OfferTargetApplicantType";

import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const OfferInfo: FunctionComponent<IOfferInfoProps> = ({ offer, className }) => (
  <div className={classNames(styles.mainContainer, className)}>
    <OfferCareers className={styles.careers} offer={offer} />
    <OfferWorkload className={styles.hours} offer={offer} />
    <OfferSalary className={styles.salary} offer={offer} />
    <OfferTargetApplicantType offer={offer} />
  </div>
);

interface IOfferInfoProps {
  offer: IOffer;
  className?: string;
}
