import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<ISeparatedStatusLabelProps> = (
  {
    className,
    extensionApprovalStatus,
    graduadosApprovalStatus
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    <StatusLabel
      className={styles.extensionApprovalStatus}
      status={extensionApprovalStatus}
      useTooltip={false}
      fixedPosition={false}
      expand={true}
    />
    <StatusLabel
      className={styles.graduadosApprovalStatus}
      status={graduadosApprovalStatus}
      useTooltip={false}
      fixedPosition={false}
      expand={true}
    />
  </div>
);

interface ISeparatedStatusLabelProps {
  className?: string;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
}
