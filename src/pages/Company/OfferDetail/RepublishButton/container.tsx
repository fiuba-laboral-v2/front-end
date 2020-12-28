import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IRepublishButtonContainerProps } from "./interface";
import { ActionButton } from "../ActionButton";
import { IActionButtonTranslations } from "../ActionButton/interface";
import { RepublishStateDescription } from "./RepublishStateDescription";

export const RepublishButtonContainer: FunctionComponent<IRepublishButtonContainerProps> = ({
  offer,
  className,
  kind
}) => {
  const translations = useTranslations<IActionButtonTranslations>("offerDetailRepublishActions");

  const showActionButton = offer.canRepublishForStudents() || offer.canRepublishForGraduates();
  const onSubmitConfirm = () => undefined;
  const messageDescription = (isModal: boolean = false) => (
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
