import React, { FunctionComponent } from "react";
import classNames from "classnames";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
import { IUserDetailsProps } from "./interfaces";

import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const UserDetails: FunctionComponent<IUserDetailsProps> = ({
  company: { cuit, businessSector, hasAnInternshipAgreement, users: [{ email, name, surname }] } = {
    cuit: "",
    businessSector: "",
    users: [{ email: "", name: "", surname: "" }]
  },
  translations,
  hidden
}) => (
  <div className={styles.userDetails} hidden={hidden}>
    <div className={styles.firstRow}>
      <TaskHeaderInfo value={`${name} ${surname}`} Icon={PersonOutlinedIcon} />
      <TaskHeaderInfo title={translations?.cuit} value={NumberFormatter.formatCuit(cuit)} />
      <TaskHeaderInfo title={translations?.businessSector} value={businessSector} />
    </div>
    <TaskHeaderInfo
      className={classNames(styles.email, {
        [styles.withoutMarginBottom]: !hasAnInternshipAgreement
      })}
      value={email}
      Icon={EmailOutlinedIcon}
    />
    {hasAnInternshipAgreement && (
      <TaskHeaderInfo value={translations?.hasAnInternshipAgreement || ""} />
    )}
  </div>
);
