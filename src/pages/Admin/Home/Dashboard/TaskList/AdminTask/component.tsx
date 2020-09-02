import React, { FunctionComponent } from "react";
import { UpdatedSince } from "$components/UpdatedSince";
import { StatusLabel } from "$components/StatusLabel";
import styles from "./styles.module.scss";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const AdminTask: FunctionComponent<IAdminTaskProps> = (
  { name, updatedAt, approvalStatus, Icon }
) => (
  <div className={styles.adminTask}>
    <Icon className={styles.icon}/>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <UpdatedSince date={updatedAt} />
    </div>
    <StatusLabel
      status={approvalStatus}
      useTooltip={true}
      fixedPosition={true}
      expand={false}
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
