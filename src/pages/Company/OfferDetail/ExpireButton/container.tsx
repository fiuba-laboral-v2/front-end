import React, { FunctionComponent, useCallback } from "react";

import { useExpireOffer, useSnackbar, useTranslations } from "$hooks";

import { IExpireButtonContainerProps } from "./interface";
import { ActionButton } from "../ActionButton";
import { IActionButtonTranslations } from "../ActionButton/interface";
import { ExpireStateDescription } from "./ExpireStateDescription";
import { formErrorHandlers } from "$errorhandlers/formErrorHandlers";

export const ExpireButtonContainer: FunctionComponent<IExpireButtonContainerProps> = ({
  offer,
  refetch,
  className,
  kind
}) => {
  const translations = useTranslations<IActionButtonTranslations>("offerDetailExpireActions");
  const { expireOffer } = useExpireOffer();
  const { enqueueSnackbar } = useSnackbar();

  const showActionButton = offer.canExpireForStudents() || offer.canExpireForGraduates();

  const onSubmitConfirm = useCallback(async () => {
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

  const messageDescription = (
    <ExpireStateDescription
      {...{
        canForStudents: offer.canExpireForStudents(),
        canForGraduates: offer.canExpireForGraduates()
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
