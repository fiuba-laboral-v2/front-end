import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { DataDetail } from "../../../DataDetail";
import { UserInfo } from "../../../UserInfo";
import { IUserDetailsProps } from "./interfaces";
import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = (
  {
    company: {
      cuit,
      users: [{
        email,
        name,
        surname
      }]
    },
    translations
  }
) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <UserInfo
        text={`${name} ${surname}`}
        Icon={PersonOutlinedIcon}
      />
      <DataDetail title={translations.cuit} value={cuit}/>
    </div>
    <UserInfo text={email} Icon={EmailOutlinedIcon}/>
  </div>
);
