import React, { FunctionComponent, useCallback } from "react";

import { useExpireOffer, useShowError, useTranslations } from "$hooks";

import { IExpireButtonContainerProps } from "./interface";
import { ActionButton } from "../ActionButton";
import { IActionButtonTranslations } from "../ActionButton/interface";
import { ExpireStateDescription } from "./ExpireStateDescription";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const ExpireButtonContainer: FunctionComponent<IExpireButtonContainerProps> = ({
  offer,
  className,
  kind
}) => {
  const translations = useTranslations<IActionButtonTranslations>("offerDetailExpireActions");
  const { expireOffer } = useExpireOffer();
  const showError = useShowError();

  const showActionButton = offer.canExpireForStudents() || offer.canExpireForGraduates();

  const onSubmitConfirm = useCallback(async () => {
    if (!offer) return;
    const response = await expireOffer({
      variables: {
        uuid: offer.uuid
      },
      errorHandlers: formErrorHandlers(showError)()
    });
    if (response.error) return;
  }, [offer, expireOffer, showError]);

  const messageDescription = ({ isModal }: { isModal: boolean }) => (
    <ExpireStateDescription
      {...{
        canExpireForStudents: offer.canExpireForStudents(),
        canExpireForGraduates: offer.canExpireForGraduates(),
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
