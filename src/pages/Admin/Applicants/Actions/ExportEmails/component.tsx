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
    {...(exportEmails && { onConfirmAndClose: () => undefined })}
    {...(!exportEmails && {
      onConfirm: () => {
        setExportEmails(true);
        onConfirm();
      }
    })}
  >
    {loading && <LoadingSpinner />}
    {!loading && exportEmails && <div className={styles.emailsContainer}>{emails}</div>}
  </FormConfirmDialog>
);
