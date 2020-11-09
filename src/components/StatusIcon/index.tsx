import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const StatusIcon: FunctionComponent<IAdminTaskProps> = ({
  className,
  approvalStatus,
  Icon
}) => (
  <div className={classNames(styles.statusIcon, className)}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} />
    </div>
    <SharedStatusLabel
      className={styles.statusLabel}
      status={approvalStatus}
      withTooltip
      type="small"
    />
  </div>
);

interface IAdminTaskProps {
  className?: string;
  approvalStatus: ApprovalStatus;
  Icon: FunctionComponent<SvgIconProps>;
}
