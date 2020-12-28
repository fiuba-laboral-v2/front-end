import { Button } from "$components/Button";
import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { IActionsProps } from "./interface";
import styles from "./styles.module.scss";
import { RepublishButton } from "../RepublishButton";
import { ExpireButton } from "../ExpireButton";

export const Actions: FunctionComponent<IActionsProps> = ({
  handleEdit,
  offer,
  refetch,
  translations
}) => {
  const showRepublishButton = offer.canRepublishForStudents() || offer.canRepublishForGraduates();
  const showExpireButton = offer.canExpireForStudents() || offer.canExpireForGraduates();
  const twoButtons = showRepublishButton && showExpireButton;
  return (
    <div className={styles.actionContainer}>
      <Button className={styles.editButton} kind="primary" onClick={handleEdit}>
        {translations?.edit}
      </Button>
      <div className={styles.secondActionRowContainer}>
        <RepublishButton
          {...{
            className: classNames(styles.republishButton, { [styles.twoButtons]: twoButtons }),
            kind: "secondary",
            offer
          }}
        />
        <ExpireButton {...{ className: styles.expireButton, kind: "danger", offer, refetch }} />
      </div>
    </div>
  );
};
