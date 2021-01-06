import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const ExportEmails: FunctionComponent<IComponentProps> = ({
  exportEmailsTranslation,
  exportedEmailsTranslation,
  isOpen,
  setIsOpen,
  onConfirm,
  exportEmails,
  setExportEmails,
  emails,
  loading
}) => (
  <FormConfirmDialog
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    translations={exportEmails ? exportedEmailsTranslation : exportEmailsTranslation}
    hideConfirmButton={exportEmails}
    closeOnConfirm={exportEmails}
    onConfirm={() => {
      setExportEmails(true);
      onConfirm();
    }}
  >
    {loading && <LoadingSpinner />}
    {!loading && exportEmails && (
      <span aria-readonly className={styles.emailsContainer}>
        {emails}
      </span>
    )}
  </FormConfirmDialog>
);
