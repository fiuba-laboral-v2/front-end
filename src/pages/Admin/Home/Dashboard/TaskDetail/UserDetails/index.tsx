import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { IUser } from "$interfaces/User";
import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  {
    user,
    additionalInfo,
    additionalInfoTitle
  }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <div className={styles.userInfo}>
        <PersonOutlinedIcon className={styles.label}/>
        <p className={styles.userInfoText}>
          {`${user.name} ${user.surname}`}
        </p>
      </div>
      <p className={styles.additionalInfo}>
        <span className={styles.label}>{additionalInfoTitle}</span>
        <span>{additionalInfo}</span>
      </p>
    </div>
    <div className={styles.userInfo}>
      <EmailOutlinedIcon className={styles.label}/>
      <p className={styles.userInfoText}>
        {user.email}
      </p>
    </div>
  </div>
);

interface IUserDetailsProps {
  user: IUser;
  additionalInfoTitle: string;
  additionalInfo: string;
}
