import React, { Fragment, FunctionComponent } from "react";
import { StatusButton } from "./component";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const StatusButtonContainer: FunctionComponent<IContainer> = (
  {
    action,
    ...props
  }
) => {
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment /> ;

  const getLabel = () => {
    if (action === ApprovalStatus.rejected) return translations.reject;
    if (action === ApprovalStatus.approved) return translations.approve;
    return translations.pending;
  };

  return <StatusButton
    {...props}
    label={getLabel()}
    action={action}
  />;
};
