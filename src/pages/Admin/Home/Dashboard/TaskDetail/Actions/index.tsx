import React, { FunctionComponent } from "react";

import { ApproveButton } from "./ApproveButton";
import { RejectButton } from "./RejectButton";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = ({
  currentStatus,
  setStatus,
  loading
}) => (
  <div className={styles.actions}>
    <RejectButton
      hidden={currentStatus === ApprovalStatus.rejected}
      loading={loading}
      setStatus={setStatus}
    />
    <ApproveButton
      hidden={currentStatus === ApprovalStatus.approved}
      loading={loading}
      setStatus={setStatus}
    />
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  currentStatus?: ApprovalStatus;
  loading: boolean;
}
