import React, { Fragment, FunctionComponent, useState } from "react";
import { StatusButton } from "./component";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { FormConfirmDialog } from "$components/FormConfirmDialog";

export const StatusButtonContainer: FunctionComponent<IContainer> = ({
  status,
  setStatus,
  loading,
  ...props
}) => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment />;
  const label = status === ApprovalStatus.rejected ? translations.reject : translations.approve;
  const { confirmDialogDescription, confirmDialogCancel } = translations;

  return (
    <>
      <StatusButton
        {...props}
        disabled={loading}
        onClick={() => setConfirmDialogIsOpen(true)}
        label={label}
      />
      <FormConfirmDialog
        isOpen={confirmDialogIsOpen}
        onConfirm={() => setStatus(status)}
        onClose={() => setConfirmDialogIsOpen(false)}
        confirmButtonKind={props.kind}
        translations={{
          confirmDialogTitle: `¿${label}?`,
          confirmDialogConfirm: label,
          confirmDialogDescription,
          confirmDialogCancel
        }}
      />
    </>
  );
};
