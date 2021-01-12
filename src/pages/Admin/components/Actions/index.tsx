import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApproveButton } from "./ApproveButton";
import { RejectButton } from "./RejectButton";
import { DetailTarget } from "./StatusButton/interfaces";

import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = ({
  currentStatus,
  setStatus,
  detailTarget,
  loading
}) => (
  <div className={styles.actions}>
    <RejectButton
      hidden={currentStatus === ApprovalStatus.rejected}
      loading={loading}
      detailTarget={detailTarget}
      setStatus={setStatus}
    />
    <ApproveButton
      hidden={currentStatus === ApprovalStatus.approved}
      loading={loading}
      detailTarget={detailTarget}
      setStatus={setStatus}
    />
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  currentStatus?: ApprovalStatus;
  detailTarget: DetailTarget;
  loading: boolean;
}
