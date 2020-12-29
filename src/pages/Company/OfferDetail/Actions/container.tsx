import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IActionsContainerProps, ITranslations } from "./interface";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = ({ offer }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("offerDetailEdit");

  const handleEdit = () => offer && history.push(RoutesBuilder.company.editOffer(offer.uuid));

  return (
    <>
      {translations && (
        <Actions
          {...{
            handleEdit,
            offer,
            translations
          }}
        />
      )}
    </>
  );
};
