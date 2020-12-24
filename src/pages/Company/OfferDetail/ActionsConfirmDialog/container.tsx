import React, { FunctionComponent, useCallback } from "react";

import { useExpireOffer, useSnackbar, useTranslations } from "$hooks";

import { IActionsConfirmDialogContainerProps, ITranslations } from "./interface";
import { ActionsConfirmDialog } from "./component";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const ActionsConfirmDialogContainer: FunctionComponent<IActionsConfirmDialogContainerProps> = ({
  offer,
  refetch,
  confirmRepublishIsOpen,
  confirmExpireIsOpen,
  closeRepublishDialog,
  closeExpireOfferDialog
}) => {
  const translations = useTranslations<ITranslations>("offerDetailConfirmDialogs");
  const { expireOffer } = useExpireOffer();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitExpireOffer = useCallback(async () => {
    if (!offer) return;
    const response = await expireOffer({
      variables: {
        uuid: offer.uuid
      },
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (response.error) return;
    refetch();
  }, [offer, expireOffer, enqueueSnackbar, refetch]);

  const onSubmitRepublish = () => undefined;

  return (
    <>
      {translations && (
        <ActionsConfirmDialog
          {...{
            confirmRepublishIsOpen,
            onSubmitRepublish,
            confirmExpireIsOpen,
            onSubmitExpireOffer,
            closeRepublishDialog,
            closeExpireOfferDialog,
            translations
          }}
        ></ActionsConfirmDialog>
      )}
    </>
  );
};
