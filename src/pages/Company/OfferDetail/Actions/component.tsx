import { Button } from "$components/Button";
import React, { FunctionComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { IActionsProps } from "./interface";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = ({
  handleEdit,
  handleRepublishOffer,
  handleExpireOffer,
  showRepublishButton,
  showExpireButton,
  republishTooltipMessage,
  expireTooltipMessage,
  translations
}) => (
  <div className={styles.actionContainer}>
    <Button className={styles.editButton} kind="primary" onClick={handleEdit}>
      {translations?.edit}
    </Button>
    <div className={styles.secondActionRowContainer}>
      {showRepublishButton && (
        <Button className={styles.republishButton} kind="secondary" onClick={handleRepublishOffer}>
          <Tooltip title={republishTooltipMessage} placement="right">
            <span>{translations?.republish}</span>
          </Tooltip>
        </Button>
      )}
      {showExpireButton && (
        <Button className={styles.expirationButton} kind="danger" onClick={handleExpireOffer}>
          <Tooltip title={expireTooltipMessage} placement="right">
            <span>{translations?.expire}</span>
          </Tooltip>
        </Button>
      )}
    </div>
  </div>
);
