import { Button } from "$components/Button";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import React, { FunctionComponent } from "react";

import { IApplyButtonProps } from "./interface";
import styles from "./styles.module.scss";

export const ApplyButton: FunctionComponent<IApplyButtonProps> = ({
  offer,
  confirmDialogIsOpen,
  onApply,
  onApplyConfirm,
  onCancel,
  translations
}) => {
  return (
    <div className={styles.applyButton}>
      <Button
        onClick={onApply}
        kind="primary"
        width="expand"
        type="submit"
        disabled={offer?.hasApplied}
        title={offer?.hasApplied ? translations?.alreadyApplied : ""}
      >
        {translations?.apply}
      </Button>
      <FormConfirmDialog
        isOpen={confirmDialogIsOpen}
        onConfirm={onApplyConfirm}
        onClose={onCancel}
        translations={{
          confirmDialogTitle: translations.confirmDialogTitle,
          confirmDialogDescription: translations.confirmDialogDescription,
          confirmDialogCancel: translations.confirmDialogCancel,
          confirmDialogConfirm: translations.confirmDialogConfirm
        }}
      ></FormConfirmDialog>
    </div>
  );
};
