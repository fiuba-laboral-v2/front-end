import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  translations,
  editLink,
  editPadronLink,
  className
}) => (
  <div className={classNames(styles.actionsContainer, className)}>
    <Button className={styles.edit} kind="primary" link={editLink}>
      {translations?.edit}
    </Button>
    <Button className={styles.editPadron} kind="secondary" link={editPadronLink}>
      {translations?.editPadron}
    </Button>
    <div className={styles.separator} />
  </div>
);
