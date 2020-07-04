import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { ICompany } from "$interfaces/Company";
import { Subtitle } from "$components/Subtitle";

import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  { company }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <div className={styles.userInfo}>
        <PersonOutlinedIcon/>
        <Subtitle>
          Marta Meli
        </Subtitle>
      </div>
      <p className={styles.cuit}>
        Cuit:
        <span>{company.cuit}</span>
      </p>
    </div>
    <div className={styles.userInfo}>
      <EmailOutlinedIcon />
      <Subtitle>
        martameli@mercadolibre.com
      </Subtitle>
    </div>
  </div>
);

export interface IUserDetailsProps {
  company: ICompany;
}
