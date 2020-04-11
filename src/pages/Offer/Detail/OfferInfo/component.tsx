import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { OfferInfoItem } from "../OfferInfoItem";
import { OfferSalary } from "../OfferSalary";
import { OfferCareers } from "../OfferCareers";

import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const OfferInfo: FunctionComponent<IOfferInfoProps> = ({ offer, className }) => (
  <div className={classNames(styles.mainContainer, className)}>
    <OfferCareers className={styles.careers} offer={offer}/>
    <OfferInfoItem className={styles.hours} title={"Carga Horaria"}>
      <div className={styles.hoursInfo}>
        <div className={styles.hoursNumber}>{offer.hoursPerDay}</div>
        <div className={styles.hoursPerDayText}>horas por dia</div>
      </div>
    </OfferInfoItem>
    <OfferSalary className={styles.salary} offer={offer} />
  </div>
);

interface IOfferInfoProps {
  offer: IOffer;
  className?: string;
}

export { OfferInfo };
