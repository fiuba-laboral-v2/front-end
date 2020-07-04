import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { ICompany } from "$interfaces/Company";

import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  { company }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <div className={styles.userInfo}>
        <PersonOutlinedIcon className={styles.label}/>
        <p className={styles.userInfoText}>
          Marta Meli
        </p>
      </div>
      <p className={styles.cuit}>
        <span className={styles.label}>Cuit:</span>
        <span>{company.cuit}</span>
      </p>
    </div>
    <div className={styles.userInfo}>
      <EmailOutlinedIcon className={styles.label}/>
      <p className={styles.userInfoText}>
        martameli@mercadolibre.com
      </p>
    </div>
  </div>
);

export interface IUserDetailsProps {
  company: ICompany;
}
