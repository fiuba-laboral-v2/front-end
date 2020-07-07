import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { UserInfo } from "../../../UserInfo";
import { IUserDetailsProps } from "./interfaces";
import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  {
    company,
    translations
  }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <UserInfo
        text={company.users[0].name}
        Icon={PersonOutlinedIcon}/>
      <p className={styles.cuit}>
        <span className={styles.label}>{translations.cuit}</span>
        <span>{company.cuit}</span>
      </p>
    </div>
    <UserInfo text={company.users[0].email} Icon={EmailOutlinedIcon}/>
  </div>
);
