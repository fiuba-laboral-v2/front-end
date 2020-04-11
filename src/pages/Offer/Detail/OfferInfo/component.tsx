import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { OfferInfoItem } from "../OfferInfoItem";
import { OfferSalary } from "../OfferSalary";

import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const OfferInfo: FunctionComponent<IOfferInfoProps> = ({ offer, className }) => (
  <div className={classNames(styles.mainContainer, className)}>
    <OfferInfoItem className={styles.careers} title={"Carreras"}>
      {
        offer.careers?.map(career =>
          <div key={career.code} className={styles.career}>{career.description}</div>
        )
      }
    </OfferInfoItem>
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
