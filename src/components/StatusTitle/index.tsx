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
    status
  }
) => (
  <div className={classNames(styles.statusTitle, className)}>
    <Headline className={styles.title}>{title}</Headline>
    {
      status &&
      <StatusLabel
        className={styles.desktopStatus}
        status={status}
        useTooltip={true}
        fixedPosition={false}
      />
    }
    {
      status &&
      <StatusLabel
        className={styles.mobileStatus}
        status={status}
        useTooltip={false}
        fixedPosition={true}
      />
    }
  </div>
);

interface IStatusTitleProps {
  className?: string;
  title: string;
  status?: ApprovalStatus;
}
