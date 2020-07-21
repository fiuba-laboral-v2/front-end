import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { Headline } from "$components/Headline";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import styles from "./styles.module.scss";

export const StatusTitle: FunctionComponent<IStatusTitleProps> = (
  {
    className,
    title,
    approvalStatus
  }
) => (
  <div className={classNames(styles.statusTitle, className)}>
    <Headline className={styles.title}>{title}</Headline>
    {
      approvalStatus &&
      <StatusLabel
        className={styles.desktopStatus}
        status={approvalStatus}
        useTooltip={true}
        fixedPosition={false}
      />
    }
    {
      approvalStatus &&
      <StatusLabel
        className={styles.mobileStatus}
        status={approvalStatus}
        useTooltip={false}
        fixedPosition={true}
      />
    }
  </div>
);

interface IStatusTitleProps {
  className?: string;
  title: string;
  approvalStatus?: ApprovalStatus;
}
