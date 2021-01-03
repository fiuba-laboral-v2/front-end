import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  translations,
  editLink,
  editCuitAndBusinessNameLink,
  className
}) => (
  <div className={classNames(styles.actionsContainer, className)}>
    <Button className={styles.edit} kind="primary" link={editLink}>
      {translations?.edit}
    </Button>
    <Button
      className={styles.editCuitAndBusinessNameLink}
      kind="secondary"
      link={editCuitAndBusinessNameLink}
    >
      {translations?.editCuitAndBusinessName}
    </Button>
    <div className={styles.separator} />
  </div>
);
