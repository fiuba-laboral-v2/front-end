import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const RejectionMessageButton: FunctionComponent<IComponentProps> = ({
  message,
  setShowMessage,
  showMessage,
  translations,
  loading
}) => (
  <>
    <Button kind="primary">{translations?.label}</Button>
    <FormConfirmDialog
      isOpen={showMessage}
      onClose={() => setShowMessage(false)}
      translations={translations}
      closeOnConfirm
    >
      {loading && <LoadingSpinner />}
      {!loading && <span>{message}</span>}
    </FormConfirmDialog>
  </>
);
