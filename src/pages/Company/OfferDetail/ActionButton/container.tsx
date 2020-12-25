import React, { FunctionComponent, useState } from "react";

import { IActionButtonContainerProps } from "./interface";
import { ActionButton } from "./component";

export const ActionButtonContainer: FunctionComponent<IActionButtonContainerProps> = ({
  className,
  kind,
  showActionButton,
  onSubmitConfirm,
  messageDescription,
  translations
}) => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);

  const handleAction = () => setConfirmDialogIsOpen(true);
  const onCloseConfirmDialog = () => setConfirmDialogIsOpen(false);

  return (
    <>
      {translations && (
        <ActionButton
          {...{
            className,
            kind,
            handleAction,
            onCloseConfirmDialog,
            confirmDialogIsOpen,
            showActionButton,
            onSubmitConfirm,
            messageDescription,
            translations
          }}
        />
      )}
    </>
  );
};
