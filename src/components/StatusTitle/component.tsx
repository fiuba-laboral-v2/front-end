import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { Headline } from "$components/Headline";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const StatusTitle: FunctionComponent<IComponentProps> = (
  {
    className,
    translations,
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
        <StatusLabel
          text={translations[approvalStatus]}
          tooltipText={translations[approvalStatus]}
          className={styles.desktopStatus}
          status={approvalStatus}
          useTooltip={true}
          fixedPosition={false}
          expand={false}
        />
        <StatusLabel
          text={translations[approvalStatus]}
          tooltipText={translations[approvalStatus]}
          className={styles.mobileStatus}
          status={approvalStatus}
          useTooltip={false}
          fixedPosition={true}
          expand={true}
        />
      </>
    }
  </div>
);
