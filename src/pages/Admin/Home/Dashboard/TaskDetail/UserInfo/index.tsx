import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const UserInfo: FunctionComponent<IUserDetailsProps> = (
  {
    Icon,
    text
  }
) => (
  <div className={styles.userInfo}>
    <Icon className={styles.label}/>
    <p className={styles.userInfoText}>
      {text}
    </p>
  </div>
);

interface IUserDetailsProps {
  text: string;
  Icon: FunctionComponent<{ className: string; }>;
}
