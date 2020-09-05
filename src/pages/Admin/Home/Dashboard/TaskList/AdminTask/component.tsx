import React, { FunctionComponent } from "react";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const AdminTask: FunctionComponent<IAdminTaskProps> = (
  { name, updatedAt, approvalStatus, Icon }
) => (
  <div className={styles.adminTask}>
    <Icon className={styles.icon}/>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <TimeHumanizer since={updatedAt}/>
    </div>
    <SharedStatusLabel
      status={approvalStatus}
      withTooltip
      fixedToTopRight
      background="dark"
      width="square"
    />
  </div>
);

interface IAdminTaskProps {
  name: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  Icon: FunctionComponent<{
    className?: string | undefined;
  }>;
}
