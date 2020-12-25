import { Button } from "$components/Button";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import Tooltip from "@material-ui/core/Tooltip";
import React, { FunctionComponent } from "react";

import { IActionButtonProps } from "./interface";

export const ActionButton: FunctionComponent<IActionButtonProps> = ({
  className,
  kind,
  showActionButton,
  handleAction,
  messageDescription,
  confirmDialogIsOpen,
  onSubmitConfirm,
  onCloseConfirmDialog,
  translations
}) => (
  <>
    {showActionButton && (
      <>
        <Button className={className} kind={kind} onClick={handleAction}>
          <Tooltip title={messageDescription} placement="right">
            <span>{translations?.buttonText}</span>
          </Tooltip>
        </Button>
        <FormConfirmDialog
          isOpen={confirmDialogIsOpen}
          onConfirm={onSubmitConfirm}
          onClose={onCloseConfirmDialog}
          translations={{
            confirmDialogTitle: translations.confirmDialogTitle,
            confirmDialogConfirm: translations.confirmDialogConfirm,
            confirmDialogDescription: messageDescription,
            confirmDialogCancel: translations.confirmDialogCancel
          }}
        />
      </>
    )}
  </>
);
