import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
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
      <TaskHeaderInfo
        value={`${name} ${surname}`}
        Icon={PersonOutlinedIcon}
      />
      <TaskHeaderInfo title={translations.cuit} value={cuit}/>
    </div>
    <TaskHeaderInfo value={email} Icon={EmailOutlinedIcon}/>
  </div>
);
