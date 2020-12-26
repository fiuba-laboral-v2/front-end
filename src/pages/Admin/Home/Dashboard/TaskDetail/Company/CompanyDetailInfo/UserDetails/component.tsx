import React, { FunctionComponent } from "react";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { TaskHeaderInfo } from "../../../../../../components/TaskHeaderInfo";
import { IUserDetailsProps } from "./interfaces";

import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const UserDetails: FunctionComponent<IUserDetailsProps> = ({
  company: { cuit, users: [{ email, name, surname }] } = {
    cuit: "",
    users: [{ email: "", name: "", surname: "" }]
  },
  translations,
  hidden
}) => (
  <div className={styles.userDetails} {...{ hidden }}>
    <div className={styles.firstRow}>
      <TaskHeaderInfo value={`${name} ${surname}`} Icon={PersonOutlinedIcon} />
      <TaskHeaderInfo title={translations?.cuit} value={NumberFormatter.formatCuit(cuit)} />
    </div>
    <TaskHeaderInfo value={email} Icon={EmailOutlinedIcon} />
  </div>
);
