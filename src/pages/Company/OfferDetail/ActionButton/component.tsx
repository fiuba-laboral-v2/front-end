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
  translations
}) => {
  const isModal = true;
  return (
    <>
      {showActionButton && (
        <>
          <Tooltip title={messageDescription()} placement="bottom-end">
            <div className={className}>
              <Button className={styles.button} kind={kind} onClick={handleAction}>
                <span>{translations?.buttonText}</span>
              </Button>
            </div>
          </Tooltip>
          <FormConfirmDialog
            isOpen={confirmDialogIsOpen}
            onConfirm={onSubmitConfirm}
            onClose={onCloseConfirmDialog}
            translations={{
              confirmDialogTitle: translations.confirmDialogTitle,
              confirmDialogConfirm: translations.confirmDialogConfirm,
              confirmDialogDescription: messageDescription(isModal),
              confirmDialogCancel: translations.confirmDialogCancel
            }}
          />
        </>
      )}
    </>
  );
};
