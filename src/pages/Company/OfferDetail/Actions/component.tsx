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
        <Tooltip
          /*classes={{ tooltip: styles.tooltip }}*/ title={republishTooltipMessage}
          placement="right"
        >
          <Button
            className={styles.republishButton}
            kind="secondary"
            onClick={handleRepublishOffer}
          >
            {translations?.republish}
          </Button>
        </Tooltip>
      )}
      {showExpireButton && (
        <Tooltip
          /*classes={{ tooltip: styles.tooltip }}*/ title={expireTooltipMessage}
          placement="right"
        >
          <Button className={styles.expirationButton} kind="danger" onClick={handleExpireOffer}>
            {translations?.expire}
          </Button>
        </Tooltip>
      )}
    </div>
  </div>
);
