import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const RejectButton: FunctionComponent<IComponent> = (
  {
    setStatus,
    translations
  }
) => (
  <Button className="danger" onClick={() => setStatus(ApprovalStatus.rejected)} >
    <HighlightOffIcon className={styles.icon} fontSize="small"/>
    {translations.reject}
  </Button>
);
