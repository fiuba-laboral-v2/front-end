import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IActionsContainerProps, ITranslations } from "./interface";
import { Actions } from "./component";
import { Secretary } from "$interfaces/Secretary";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ReactElement } from "react";
import { OfferFutureState } from "../OfferFutureState";
import { OfferFutureStateMessage } from "../OfferFutureState/interface";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = ({
  offer,
  handleRepublishOffer,
  handleExpireOffer
}) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("offerDetailActions");

  const targetStudents = offer.isTargetingStudents() || offer.isTargetingBoth();
  const targetGraduates = offer.isTargetingGraduates() || offer.isTargetingBoth();

  const canExpireForStudents = () =>
    targetStudents &&
    !offer.isRejectedFor(Secretary.extension) &&
    !offer.hasExpiredFor(Secretary.extension);

  const canExpireForGraduates = () =>
    targetGraduates &&
    !offer.hasExpiredFor(Secretary.graduados) &&
    !offer.isRejectedFor(Secretary.graduados);

  const canRepublishForStudents = () => targetStudents && offer.hasExpiredFor(Secretary.extension);
  const canRepublishForGraduates = () =>
    targetGraduates && offer.hasExpiredFor(Secretary.graduados);

  const showRepublishButton = canRepublishForStudents() || canRepublishForGraduates();
  const showExpireButton = canExpireForStudents() || canExpireForGraduates();

  const handleEdit = () => offer && history.push(RoutesBuilder.company.editOffer(offer.uuid));

  const republishTooltipMessage = (() => {
    if (!showRepublishButton) return "";

    return (
      <OfferFutureState
        canForGraduates={canRepublishForGraduates()}
        canForStudents={canRepublishForStudents()}
        offerFutureMessage={OfferFutureStateMessage.republish}
      />
    );
  })() as ReactElement<string>;
  const expireTooltipMessage = (() => {
    if (!showExpireButton) return "";
    return (
      <OfferFutureState
        canForGraduates={canExpireForGraduates()}
        canForStudents={canExpireForStudents()}
        offerFutureMessage={OfferFutureStateMessage.expire}
      />
    );
  })() as ReactElement<string>;

  return (
    <>
      {translations && (
        <Actions
          {...{
            handleEdit,
            handleRepublishOffer,
            handleExpireOffer,
            showRepublishButton,
            showExpireButton,
            republishTooltipMessage,
            expireTooltipMessage,
            translations
          }}
        ></Actions>
      )}
    </>
  );
};
