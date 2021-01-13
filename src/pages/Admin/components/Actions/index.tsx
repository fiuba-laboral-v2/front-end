import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApproveButton } from "./ApproveButton";
import { RejectButton } from "./RejectButton";
import { NotificationRecipient } from "./StatusButton/interfaces";

import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = ({
  currentStatus,
  setStatus,
  notificationRecipient,
  loading
}) => (
  <div className={styles.actions}>
    <RejectButton
      hidden={currentStatus === ApprovalStatus.rejected}
      loading={loading}
      notificationRecipient={notificationRecipient}
      setStatus={setStatus}
    />
    <ApproveButton
      hidden={currentStatus === ApprovalStatus.approved}
      loading={loading}
      notificationRecipient={notificationRecipient}
      setStatus={setStatus}
    />
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  currentStatus?: ApprovalStatus;
  notificationRecipient: NotificationRecipient;
  loading: boolean;
}
