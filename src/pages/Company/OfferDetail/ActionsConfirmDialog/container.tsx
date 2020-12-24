import React, { FunctionComponent, useCallback } from "react";

import { useExpireOffer, useSnackbar, useTranslations } from "$hooks";

import { IActionsConfirmDialogContainerProps, ITranslations } from "./interface";
import { ActionsConfirmDialog } from "./component";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { OfferFutureState } from "../OfferFutureState";
import { Secretary } from "$interfaces/Secretary";
import { OfferFutureStateMessage } from "../OfferFutureState/interface";

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

  const targetStudents = offer.isTargetingStudents() || offer.isTargetingBoth();
  const targetGraduates = offer.isTargetingGraduates() || offer.isTargetingBoth();

  const canRepublishForStudents = () => targetStudents && offer.hasExpiredFor(Secretary.extension);
  const canRepublishForGraduates = () =>
    targetGraduates && offer.hasExpiredFor(Secretary.graduados);

  const canExpireForStudents = () =>
    targetStudents &&
    !offer.isRejectedFor(Secretary.extension) &&
    !offer.hasExpiredFor(Secretary.extension);

  const canExpireForGraduates = () =>
    targetGraduates &&
    !offer.hasExpiredFor(Secretary.graduados) &&
    !offer.isRejectedFor(Secretary.graduados);

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
            translations,
            republishConfirmDialogDescription: (
              <div>
                {translations.confirmRepublishDescription}
                <OfferFutureState
                  canForGraduates={canRepublishForGraduates()}
                  canForStudents={canRepublishForStudents()}
                  offerFutureMessage={OfferFutureStateMessage.republish}
                />
              </div>
            ),
            expireConfirmDialogDescription: (
              <div>
                {translations.confirmExpireDescription}
                <OfferFutureState
                  canForGraduates={canExpireForGraduates()}
                  canForStudents={canExpireForStudents()}
                  offerFutureMessage={OfferFutureStateMessage.expire}
                />
              </div>
            )
          }}
        ></ActionsConfirmDialog>
      )}
    </>
  );
};
