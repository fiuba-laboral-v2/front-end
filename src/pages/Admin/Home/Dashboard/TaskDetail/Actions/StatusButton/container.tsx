import React, { Fragment, FunctionComponent } from "react";
import { StatusButton } from "./component";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const StatusButtonContainer: FunctionComponent<IContainer> = ({
  status,
  setStatus,
  loading,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment />;

  const getLabel = () => {
    if (status === ApprovalStatus.rejected) return translations.reject;
    return translations.approve;
  };

  return (
    <StatusButton
      {...props}
      disabled={loading}
      setStatus={setStatus}
      label={getLabel()}
      status={status}
    />
  );
};
