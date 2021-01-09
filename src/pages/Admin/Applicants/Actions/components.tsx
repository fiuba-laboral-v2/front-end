import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { ExportEmails } from "./ExportEmails";
import { FiltersButton } from "../../components/FiltersButton";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  filter,
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
    <FiltersButton onClick={onClickFilter} showFilter={showFilter} />
    <ExportEmails
      filter={filter}
      isOpen={isExportEmailDialogOpen}
      setIsOpen={setIsExportEmailDialogOpen}
    />
  </div>
);
