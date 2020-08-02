import React, { FunctionComponent, Fragment } from "react";

import { Actions } from "./component";
import { useTranslations } from "$hooks/queries";
import { IActionsContainerProps, IAdminActionsTranslations } from "./interaces";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = (
  {
    currentStatus,
    setStatus
  }
) => {
  const translations = useTranslations<IAdminActionsTranslations>("adminActions");
  if (!translations) return <Fragment /> ;
  return (
    <Actions
      currentStatus={currentStatus}
      setStatus={setStatus}
      translations={translations}
    />
  );
};
