import { Button } from "$components/Button";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import Tooltip from "@material-ui/core/Tooltip";
import React, { FunctionComponent } from "react";

import { IActionButtonProps } from "./interface";

import styles from "./styles.module.scss";

export const ActionButton: FunctionComponent<IActionButtonProps> = ({
  className,
  kind,
  showActionButton,
  handleAction,
  messageDescription,
  confirmDialogIsOpen,
  onSubmitConfirm,
  onCloseConfirmDialog,
  translations: {
    confirmDialogTitle,
    confirmDialogConfirm,
    confirmDialogDescription,
    confirmDialogCancel,
    buttonText
  }
}) => (
  <>
    {showActionButton && (
      <>
        <Tooltip title={messageDescription({ isModal: false })} placement="bottom-end">
          <div className={className}>
            <Button className={styles.button} kind={kind} onClick={handleAction}>
              <span>{buttonText}</span>
            </Button>
          </div>
        </Tooltip>
        <FormConfirmDialog
          isOpen={confirmDialogIsOpen}
          onConfirm={onSubmitConfirm}
          onClose={onCloseConfirmDialog}
          translations={{
            confirmDialogTitle,
            confirmDialogConfirm,
            confirmDialogDescription,
            confirmDialogCancel
          }}
        >
          {messageDescription({ isModal: true })}
        </FormConfirmDialog>
      </>
    )}
  </>
);
