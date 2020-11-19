import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { Title } from "$components/Title";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import styles from "./styles.module.scss";

export const StatusTitle: FunctionComponent<IComponentProps> = ({
  className,
  detailTitle,
  approvalStatus
}) => (
  <div className={classNames(styles.statusTitle, className)}>
    <Title className={styles.title}>{detailTitle}</Title>
    <SharedStatusLabel
      className={styles.desktopStatus}
      status={approvalStatus}
      withTooltip
      type="large"
    />
    <SharedStatusLabel className={styles.mobileStatus} status={approvalStatus} type="large" />
  </div>
);

interface IComponentProps {
  className?: string;
  detailTitle: string;
  approvalStatus?: ApprovalStatus;
}
