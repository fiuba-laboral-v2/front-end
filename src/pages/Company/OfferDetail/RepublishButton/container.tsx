import React, { FunctionComponent, useCallback } from "react";

import { useRepublishOffer, useSnackbar, useTranslations } from "$hooks";

import { IRepublishButtonContainerProps } from "./interface";
import { ActionButton } from "../ActionButton";
import { IActionButtonTranslations } from "../ActionButton/interface";
import { RepublishStateDescription } from "./RepublishStateDescription";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const RepublishButtonContainer: FunctionComponent<IRepublishButtonContainerProps> = ({
  offer,
  refetch,
  className,
  kind
}) => {
  const translations = useTranslations<IActionButtonTranslations>("offerDetailRepublishActions");
  const { republishOffer } = useRepublishOffer();
  const { enqueueSnackbar } = useSnackbar();

  const showActionButton = offer.canRepublishForStudents() || offer.canRepublishForGraduates();

  const onSubmitConfirm = useCallback(async () => {
    if (!offer) return;
    const response = await republishOffer({
      variables: {
        uuid: offer.uuid
      },
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (response.error) return;
    refetch();
  }, [offer, republishOffer, enqueueSnackbar, refetch]);

  const messageDescription = ({ isModal }: { isModal: boolean }) => (
    <RepublishStateDescription
      {...{
        canRepublishForStudents: offer.canRepublishForStudents(),
        canRepublishForGraduates: offer.canRepublishForGraduates(),
        isModal
      }}
    />
  );

  return (
    <>
      {translations && (
        <ActionButton
          {...{
            className,
            kind,
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
