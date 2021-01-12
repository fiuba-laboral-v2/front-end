import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";

export const RejectionMessageButton: FunctionComponent<IComponentProps> = ({
  message,
  setShowMessage,
  showMessage,
  translations
}) => (
  <>
    <Button kind="primary">{translations?.label}</Button>
    <FormConfirmDialog
      isOpen={showMessage}
      onClose={() => setShowMessage(false)}
      translations={translations}
      closeOnConfirm
    >
      <span>{message}</span>
    </FormConfirmDialog>
  </>
);
