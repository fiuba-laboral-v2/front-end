import React, { FunctionComponent } from "react";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { IComponentProps } from "./interfaces";

export const ExportEmails: FunctionComponent<IComponentProps> = ({
  exportEmailsTranslation,
  exportedEmailsTranslation,
  isOpen,
  setIsOpen,
  onConfirm,
  exportEmails,
  setExportEmails,
  emails
}) => (
  <FormConfirmDialog
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    translations={exportEmails ? exportedEmailsTranslation : exportEmailsTranslation}
    {...(exportEmails && { onConfirmAndClose: onConfirm })}
    {...(!exportEmails && { onConfirm: () => setExportEmails(true) })}
  >
    {exportEmails && <div>{emails}</div>}
  </FormConfirmDialog>
);
