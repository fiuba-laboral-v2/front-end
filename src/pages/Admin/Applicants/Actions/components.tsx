import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { ExportEmails } from "./ExportEmails";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  translations,
  onClickExportEmails,
  onClickFilter,
  showFilter,
  isExportEmailDialogOpen,
  setIsExportEmailDialogOpen
}) => (
  <div className={styles.actions}>
    <Button className={styles.exportEmails} kind="secondary" onClick={onClickExportEmails}>
      Exportar emails
    </Button>
    <Button kind="primary" onClick={onClickFilter}>
      {showFilter ? translations?.cleanFilters : translations?.filters}
    </Button>
    <ExportEmails isOpen={isExportEmailDialogOpen} setIsOpen={setIsExportEmailDialogOpen} />
  </div>
);
