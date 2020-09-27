import React, { FunctionComponent } from "react";

import { ApproveButton } from "./ApproveButton";
import { RejectButton } from "./RejectButton";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = (
  {
    currentStatus,
    setStatus,
    loading
  }
) => (
  <div className={styles.actions}>
    {
      currentStatus !== ApprovalStatus.rejected &&
      <RejectButton loading={loading} setStatus={setStatus} />
    }
    {
      currentStatus !== ApprovalStatus.approved &&
      <ApproveButton loading={loading} setStatus={setStatus}/>
    }
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus) => Promise<void>;
  currentStatus: ApprovalStatus;
  loading: boolean;
}
