import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  translations,
  onClickExportEmails,
  onClickFilter,
  showFilter
}) => (
  <div className={styles.actions}>
    <Button className={styles.exportEmails} kind="secondary" onClick={onClickExportEmails}>
      Exportar emails
    </Button>
    <Button kind="primary" onClick={onClickFilter}>
      {showFilter ? translations?.cleanFilters : translations?.filters}
    </Button>
  </div>
);
