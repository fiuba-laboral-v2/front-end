import React, { FunctionComponent } from "react";
import classNames from "classnames";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const OfferInfo: FunctionComponent<IOfferInfoProps> = ({ offer, className }) => (
  <div className={classNames(styles.mainContainer, className)}>
    <div className={styles.careers}>
      <div className={styles.careersTitle}>Carreras</div>
      {
        offer.careers?.map(career =>
          <div key={career.code} className={styles.career}>{career.description}</div>
        )
      }
    </div>
    <div className={styles.hours}>
      <div className={styles.hoursTitle}>Carga Horaria</div>
      <div className={styles.hoursInfo}>
        <div className={styles.hoursNumber}>{offer.hoursPerDay}</div>
        <div className={styles.hoursPerDayText}>horas por dia</div>
      </div>
    </div>
    <div className={styles.salary}>
      <div className={styles.salaryTitle}>Salario Neto</div>
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
    </div>
  </div>
);

interface IOfferInfoProps {
  offer: IOffer;
  className?: string;
}

export { OfferInfo };
