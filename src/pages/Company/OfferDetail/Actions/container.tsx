import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import { IActionsContainerProps, ITranslations } from "./interface";
import { Actions } from "./component";
import { Secretary } from "$interfaces/Secretary";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ReactElement } from "react";
import { TimeFormatter } from "$models/TimeFormatter";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = ({
  offer,
  handleRepublishOffer,
  handleExpireOffer
}) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("offerDetailActions");
  const studentsOfferDuration = useExtensionOfferDuration();
  const graduatesOfferDuration = useGraduadosOfferDuration();

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
    const message = [];
    if (!showRepublishButton) return "";
    if (canRepublishForStudents() && studentsOfferDuration) {
      message.push(
        `${translations?.tooltipRepublishStudents} ${TimeFormatter.daysFromNowInDate(
          studentsOfferDuration
        )}`
      );
    }
    if (canRepublishForGraduates() && graduatesOfferDuration) {
      message.push(
        `${translations?.tooltipRepublishGraduates} ${TimeFormatter.daysFromNowInDate(
          graduatesOfferDuration
        )}`
      );
    }
    return (
      <div>
        {message[0]}
        {message.length === 2 && (
          <>
            <br />
            {message[1]}
          </>
        )}
      </div>
    );
  })() as ReactElement<string>;
  const expireTooltipMessage = (() => {
    const message = [];
    if (!showExpireButton) return "";
    if (canExpireForStudents()) message.push(`${translations?.tooltipExpireStudents}`);
    if (canExpireForGraduates()) message.push(`${translations?.tooltipExpireGraduates}`);
    return (
      <div>
        {message[0]}
        {message.length === 2 && (
          <>
            <br />
            {message[1]}
          </>
        )}
      </div>
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
