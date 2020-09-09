import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { StatusIcon } from "./StatusIcon";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const AdminTask: FunctionComponent<IAdminTaskProps> = (
  {
    name,
    updatedAt,
    approvalStatus,
    Icon
  }
) => (
  <div className={styles.adminTask}>
    <StatusIcon className={styles.statusIcon} Icon={Icon} approvalStatus={approvalStatus}/>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <TimeHumanizer since={updatedAt}/>
    </div>
  </div>
);

interface IAdminTaskProps {
  name: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  Icon: FunctionComponent<SvgIconProps>;
}
