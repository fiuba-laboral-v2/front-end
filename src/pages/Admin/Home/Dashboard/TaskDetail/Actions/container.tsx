import React, { FunctionComponent, Fragment } from "react";

import { Actions } from "./component";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ActionsContainer: FunctionComponent<IActionsContainerProps> = (
  { setStatus }
) => {
  const translations = useTranslations<IAdminActions>("adminActions");
  if (translations.loading || translations.error) return <Fragment /> ;
  return <Actions setStatus={setStatus} translations={translations.data}/>;
};

interface IActionsContainerProps {
  setStatus: (status: ApprovalStatus) => void;
}

interface IAdminActions {
  approve: string;
  reject: string;
}
