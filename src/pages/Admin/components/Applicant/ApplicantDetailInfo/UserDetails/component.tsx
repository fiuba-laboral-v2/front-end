import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
import { IUserDetailsProps } from "./interfaces";
import styles from "./styles.module.scss";

export const UserDetails: FunctionComponent<IUserDetailsProps> = ({ applicant, translations }) => (
  <div className={styles.userDetails}>
    <div className={styles.firstRow}>
      <TaskHeaderInfo
        value={`${applicant.user.name} ${applicant.user.surname}`}
        Icon={PersonOutlinedIcon}
      />
      <TaskHeaderInfo title={translations.padron} value={applicant.padron.toString()} />
    </div>
    <TaskHeaderInfo value={applicant.user.email} Icon={EmailOutlinedIcon} />
  </div>
);
