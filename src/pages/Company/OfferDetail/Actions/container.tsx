import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IActionsContainerProps, ITranslations } from "./interface";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = ({ offer, refetch }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("offerDetailActions");

  const handleEdit = () => offer && history.push(RoutesBuilder.company.editOffer(offer.uuid));

  return (
    <>
      {translations && (
        <Actions
          {...{
            handleEdit,
            offer,
            refetch,
            translations
          }}
        />
      )}
    </>
  );
};
