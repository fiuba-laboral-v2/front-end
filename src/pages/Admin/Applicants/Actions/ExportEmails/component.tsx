import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { MessageBox } from "../../../components/MessageBox";
import { IComponentProps } from "./interfaces";

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
    onClose={() => {
      setIsOpen(false);
      setExportEmails(false);
    }}
    translations={exportEmails ? exportedEmailsTranslation : exportEmailsTranslation}
    hideConfirmButton={exportEmails}
    closeOnConfirm={exportEmails}
    onConfirm={() => {
      setExportEmails(true);
      onConfirm();
    }}
  >
    {loading && <LoadingSpinner />}
    {!loading && exportEmails && <MessageBox aria-readonly>{emails}</MessageBox>}
  </FormConfirmDialog>
);
