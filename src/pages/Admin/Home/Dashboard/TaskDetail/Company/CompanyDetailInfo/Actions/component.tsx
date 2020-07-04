import React, { FunctionComponent } from "react";
import DoneIcon from "@material-ui/icons/Done";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Button from "$components/Button";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = (
  { setStatus }
) => (
  <div className={styles.actions}>
    <Button
      className="danger"
      onClick={() => setStatus(ApprovalStatus.rejected)}
    >
      <HighlightOffIcon className={styles.icons}/>
      Rechazar
    </Button>
    <Button
      className="primary"
      onClick={() => setStatus(ApprovalStatus.approved)}
    >
      <DoneIcon className={styles.icons}/>
      Aprobar
    </Button>
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus) => void;
}
