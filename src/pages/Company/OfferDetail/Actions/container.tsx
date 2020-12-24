import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IActionsContainerProps, ITranslations } from "./interface";
import { Actions } from "./component";
import { Secretary } from "$interfaces/Secretary";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = ({
  offer,
  handleRepublishOffer,
  handleExpireOffer
}) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("offerDetailActions");

  const showRepublishButton = (() => {
    return (
      ((offer?.isTargetingStudents() || offer?.isTargetingBoth()) &&
        offer?.hasExpiredFor(Secretary.extension)) ||
      ((offer?.isTargetingGraduates() || offer?.isTargetingBoth()) &&
        offer?.hasExpiredFor(Secretary.graduados))
    );
  })();

  const showExpireButton = (() => {
    return (
      ((offer?.isTargetingStudents() || offer?.isTargetingBoth()) &&
        !offer?.hasExpiredFor(Secretary.extension) &&
        !offer.isRejectedFor(Secretary.extension)) ||
      ((offer?.isTargetingGraduates() || offer?.isTargetingBoth()) &&
        !offer?.hasExpiredFor(Secretary.graduados) &&
        !offer.isRejectedFor(Secretary.graduados))
    );
  })();

  const handleEdit = () => offer && history.push(RoutesBuilder.company.editOffer(offer.uuid));

  const republishTooltipMessage = "tooltip for republish";
  const expireTooltipMessage = "tooltip for expire";

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
