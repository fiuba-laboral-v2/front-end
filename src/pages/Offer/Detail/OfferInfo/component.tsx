import React, { FunctionComponent } from "react";
import classNames from "classnames";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { OfferInfoItem } from "../OfferInfoItem";

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
    <OfferInfoItem className={styles.salary} title={"Salario Neto"}>
      <div className={styles.minimumSalary}>
        <div className={styles.salaryFrom}>Desde</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.minimumSalary}</div>
      </div>
      <div className={styles.maximumSalary}>
        <div className={styles.salaryTo}>Hasta</div>
        <AttachMoneyIcon fontSize="small"/>
        <div className={styles.salaryNumber}>{offer.maximumSalary}</div>
      </div>
    </OfferInfoItem>
  </div>
);

interface IOfferInfoProps {
  offer: IOffer;
  className?: string;
}

export { OfferInfo };
