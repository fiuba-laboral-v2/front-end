import React, { Fragment, FunctionComponent, useState } from "react";
import { NotificationRecipient, IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { StatusButton } from "./component";
import { FormikForm } from "$components/FormikForm";
import { TextField } from "$components/Fields/TextField";
import { Formik } from "$components/Formik";

export const StatusButtonContainer: FunctionComponent<IContainer> = ({
  status,
  setStatus,
  loading,
  notificationRecipient,
  ...props
}) => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment />;

  const isRejected = () => status === ApprovalStatus.rejected;
  const label = isRejected() ? translations.reject : translations.approve;
  const { confirmDialogCancel } = translations;

  const confirmDialogDescription = {
    [NotificationRecipient.APPLICANT]: translations.confirmDialogDescriptionForApplicants,
    [NotificationRecipient.COMPANY]: translations.confirmDialogDescriptionForCompanies,
    [NotificationRecipient.BOTH]: isRejected()
      ? translations.confirmDialogDescriptionForApplicants
      : translations.confirmDialogDescriptionForBoth
  }[notificationRecipient];

  const onSubmit = async ({ moderatorMessage }: IValues) => {
    await setStatus(status, moderatorMessage);
    setConfirmDialogIsOpen(false);
  };

  const initialValues: IValues = { moderatorMessage: "" };
  const formName = "updateStatus";

  return (
    <>
      <StatusButton
        {...props}
        disabled={loading}
        onClick={() => setConfirmDialogIsOpen(true)}
        label={label}
      />
      <FormConfirmDialog
        formName={formName}
        isOpen={confirmDialogIsOpen}
        {...(!isRejected() && { onConfirm: () => setStatus(status) })}
        closeOnConfirm={!isRejected()}
        onClose={() => setConfirmDialogIsOpen(false)}
        confirmButtonKind={props.kind}
        confirmButtonType="submit"
        translations={{
          confirmDialogTitle: `¿${label}?`,
          confirmDialogConfirm: label,
          confirmDialogDescription,
          confirmDialogCancel
        }}
      >
        {isRejected() && (
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <FormikForm id={formName}>
                <TextField
                  name="moderatorMessage"
                  label={translations?.rejectReasonLabel}
                  mandatory
                />
              </FormikForm>
            )}
          </Formik>
        )}
      </FormConfirmDialog>
    </>
  );
};

interface IValues {
  moderatorMessage?: string;
}
