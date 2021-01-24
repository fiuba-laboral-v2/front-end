import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { MessageBox } from "../../components/MessageBox";

export const RejectionMessageButton: FunctionComponent<IComponentProps> = ({
  message,
  setShowMessage,
  showMessage,
  translations,
  loading,
  onClick,
  className
}) => (
  <>
    <Button className={className} kind="secondary" onClick={onClick}>
      {translations?.label}
    </Button>
    <FormConfirmDialog
      isOpen={showMessage}
      onClose={() => setShowMessage(false)}
      translations={translations}
      closeOnConfirm
      hideConfirmButton
    >
      {loading && <LoadingSpinner />}
      {!loading && <MessageBox>{message}</MessageBox>}
    </FormConfirmDialog>
  </>
);
