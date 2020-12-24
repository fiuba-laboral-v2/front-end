import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import React, { FunctionComponent } from "react";

import { IActionsConfirmDialogProps } from "./interface";

export const ActionsConfirmDialog: FunctionComponent<IActionsConfirmDialogProps> = ({
  confirmRepublishIsOpen,
  onSubmitRepublish,
  confirmExpireIsOpen,
  onSubmitExpireOffer,
  closeRepublishDialog,
  closeExpireOfferDialog,
  translations
}) => (
  <>
    <FormConfirmDialog
      isOpen={confirmRepublishIsOpen}
      onConfirm={onSubmitRepublish}
      onClose={closeRepublishDialog}
      translations={{
        confirmDialogTitle: translations.confirmRepublishTitle,
        confirmDialogConfirm: translations.confirmRepublishConfirm,
        confirmDialogDescription: translations.confirmRepublishDescription,
        confirmDialogCancel: translations.confirmRepublishCancel
      }}
    />
    <FormConfirmDialog
      isOpen={confirmExpireIsOpen}
      onConfirm={onSubmitExpireOffer}
      onClose={closeExpireOfferDialog}
      translations={{
        confirmDialogTitle: translations.confirmExpireTitle,
        confirmDialogConfirm: translations.confirmExpireConfirm,
        confirmDialogDescription: translations.confirmExpireDescription,
        confirmDialogCancel: translations.confirmExpireCancel
      }}
    />
  </>
);
