import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { IUserDetailsProps } from "./interfaces";
import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  {
    applicant,
    translations
  }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <div className={styles.userInfo}>
        <PersonOutlinedIcon className={styles.label}/>
        <p className={styles.userInfoText}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </p>
      </div>
      <p className={styles.padron}>
        <span className={styles.label}>{`${translations.padron}:`}</span>
        <span>{applicant.padron}</span>
      </p>
    </div>
    <div className={styles.userInfo}>
      <EmailOutlinedIcon className={styles.label}/>
      <p className={styles.userInfoText}>
        {applicant.user.email}
      </p>
    </div>
  </div>
);
