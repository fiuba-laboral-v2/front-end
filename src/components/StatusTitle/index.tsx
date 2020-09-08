import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { Headline } from "$components/Headline";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import styles from "./styles.module.scss";

export const StatusTitle: FunctionComponent<IComponentProps> = (
  {
    className,
    detailTitle,
    approvalStatus,
    mobileLayout
  }
) => (
  <div className={classNames(styles.statusTitle, className)}>
    <Headline className={styles.title} mobileLayout={mobileLayout}>{detailTitle}</Headline>
    {
      approvalStatus &&
      <>
        <SharedStatusLabel
          className={styles.desktopStatus}
          status={approvalStatus}
          withTooltip
          shape="circular"
        />
        <SharedStatusLabel
          className={styles.mobileStatus}
          status={approvalStatus}
          shape="rectangular"
        />
      </>
    }
  </div>
);

interface IComponentProps {
  className?: string;
  detailTitle: string;
  approvalStatus?: ApprovalStatus;
  mobileLayout?: boolean;
}
