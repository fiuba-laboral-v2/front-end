import React, { FunctionComponent, useCallback } from "react";

import { useRepublishOffer, useShowError, useTranslations } from "$hooks";

import { IRepublishButtonContainerProps } from "./interface";
import { ActionButton } from "../ActionButton";
import { IActionButtonTranslations } from "../ActionButton/interface";
import { RepublishStateDescription } from "./RepublishStateDescription";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";

export const RepublishButtonContainer: FunctionComponent<IRepublishButtonContainerProps> = ({
  offer,
  className,
  kind
}) => {
  const translations = useTranslations<IActionButtonTranslations>("offerDetailRepublishActions");
  const { republishOffer } = useRepublishOffer();
  const showError = useShowError();

  const showActionButton = offer.canRepublishForStudents() || offer.canRepublishForGraduates();

  const onSubmitConfirm = useCallback(async () => {
    if (!offer) return;
    const response = await republishOffer({
      variables: {
        uuid: offer.uuid
      },
      errorHandlers: formErrorHandlers(showError)()
    });
    if (response.error) return;
  }, [offer, republishOffer, showError]);

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
