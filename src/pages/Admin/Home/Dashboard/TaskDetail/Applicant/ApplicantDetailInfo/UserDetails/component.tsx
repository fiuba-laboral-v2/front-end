import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { UserInfo } from "../../../UserInfo";
import { DataDetail } from "../../../DataDetail";
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
      <UserInfo
        text={`${applicant.user.name} ${applicant.user.surname}`}
        Icon={PersonOutlinedIcon}/>
      <DataDetail title={translations.padron} value={applicant.padron.toString()}/>
    </div>
    <UserInfo text={applicant.user.email} Icon={EmailOutlinedIcon}/>
  </div>
);
