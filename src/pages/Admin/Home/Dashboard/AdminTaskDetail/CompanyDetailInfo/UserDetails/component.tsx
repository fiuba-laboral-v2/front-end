import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";

import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  { company }
) => <>
  <div className={styles.userDetails}>
    <p>
      Usuario:
      <span className={styles.userInfo}>Marta Meli</span>
    </p>
    <p>
      Email:
      <span className={styles.userInfo}>martameli@mercadolibre.com</span>
    </p>
    <p>
      Cuit:
      <span className={styles.userInfo}>{company.cuit}</span>
    </p>
  </div>
</>;

export interface IUserDetailsProps {
  company: ICompany;
}
