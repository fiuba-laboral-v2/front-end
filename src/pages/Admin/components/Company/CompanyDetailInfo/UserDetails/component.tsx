import React, { FunctionComponent } from "react";
import classNames from "classnames";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { TaskHeaderInfo } from "../../../TaskHeaderInfo";
import Tooltip from "@material-ui/core/Tooltip";
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
      <TaskHeaderInfo
        className={styles.firstRowItem}
        value={`${name} ${surname}`}
        Icon={PersonOutlinedIcon}
      />
      <TaskHeaderInfo
        className={styles.firstRowItem}
        title={translations?.cuit}
        value={NumberFormatter.formatCuit(cuit)}
      />
      <Tooltip title={businessSector} placement="top-start">
        <div>
          <TaskHeaderInfo
            valueClassName={styles.businessSectorValue}
            className={styles.businessSector}
            title={translations?.businessSector}
            value={businessSector}
          />
        </div>
      </Tooltip>
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
