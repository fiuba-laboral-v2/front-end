import React, { FunctionComponent } from "react";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { IComponentProps } from "./interfaces";

export const ExportEmails: FunctionComponent<IComponentProps> = ({
  translations,
  isOpen,
  setIsOpen
}) => (
  <FormConfirmDialog
    isOpen={isOpen}
    onConfirm={() => undefined}
    onClose={() => setIsOpen(false)}
    translations={translations}
  />
);
