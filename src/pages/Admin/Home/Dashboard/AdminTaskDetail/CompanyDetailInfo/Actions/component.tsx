import React, { FunctionComponent } from "react";

import Button from "$components/Button";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = (
  { setStatus }
) => <>
  <div className={styles.actions}>
    <Button
      className="primary"
      onClick={() => setStatus(ApprovalStatus.approved)}
    >
      Aprobar
    </Button>
    <Button
      className="danger"
      onClick={() => setStatus(ApprovalStatus.rejected)}
    >
      Rechazar
    </Button>
  </div>
</>;

export interface IActionsProps {
  setStatus: (status: ApprovalStatus) => void;
}
