import { Button } from "$components/Button";
import React, { FunctionComponent } from "react";

import { IActionsProps } from "./interface";
import styles from "./styles.module.scss";
import { RepublishButton } from "../RepublishButton";
import { ExpireButton } from "../ExpireButton";

export const Actions: FunctionComponent<IActionsProps> = ({
  handleEdit,
  offer,
  refetch,
  translations
}) => (
  <div className={styles.actionContainer}>
    <Button className={styles.editButton} kind="primary" onClick={handleEdit}>
      {translations?.edit}
    </Button>
    <div className={styles.secondActionRowContainer}>
      <RepublishButton {...{ className: styles.republishButton, kind: "secondary", offer }} />
      <ExpireButton {...{ className: styles.expireButton, kind: "danger", offer, refetch }} />
    </div>
  </div>
);
