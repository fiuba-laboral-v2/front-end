import { Button } from "$components/Button";
import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { IActionsProps } from "./interface";
import styles from "./styles.module.scss";
import { RepublishButton } from "../RepublishButton";
import { ExpireButton } from "../ExpireButton";

export const Actions: FunctionComponent<IActionsProps> = ({ handleEdit, offer, translations }) => {
  const showRepublishButton = offer.canRepublishForStudents() || offer.canRepublishForGraduates();
  const showExpireButton = offer.canExpireForStudents() || offer.canExpireForGraduates();
  const showTwoButtons = showRepublishButton && showExpireButton;
  return (
    <div className={styles.actionContainer}>
      <Button className={styles.editButton} kind="primary" onClick={handleEdit}>
        {translations?.edit}
      </Button>
      <div className={styles.secondActionRowContainer}>
        <RepublishButton
          {...{
            className: classNames(styles.republishButton, {
              [styles.showTwoButtons]: showTwoButtons
            }),
            kind: "secondary",
            offer
          }}
        />
        <ExpireButton {...{ className: styles.expireButton, kind: "danger", offer }} />
      </div>
    </div>
  );
};
