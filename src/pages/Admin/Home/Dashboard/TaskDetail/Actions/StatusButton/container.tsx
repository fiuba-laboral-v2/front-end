import React, { Fragment, FunctionComponent, useState } from "react";
import { StatusButton } from "./component";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const StatusButtonContainer: FunctionComponent<IContainer> = (
  {
    status,
    setStatus,
    ...props
  }
) => {
  const [disabled, setDisabled] = useState(false);
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment /> ;

  const getLabel = () => {
    if (status === ApprovalStatus.rejected) return translations.reject;
    return translations.approve;
  };

  const onSetStatus = (approvalStatus: ApprovalStatus) => {
    setDisabled(true);
    return setStatus(approvalStatus).then(() => setDisabled(false));
  };

  return <StatusButton
    {...props}
    setStatus={onSetStatus}
    label={getLabel()}
    status={status}
    disabled={disabled}
  />;
};
