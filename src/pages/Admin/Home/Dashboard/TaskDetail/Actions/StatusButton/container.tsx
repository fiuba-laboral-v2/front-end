import React, { Fragment, FunctionComponent, useState } from "react";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { FormikHelpers } from "formik/dist/types";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { StatusButton } from "./component";
import { FormikForm } from "$components/FormikForm";
import { TextField } from "$components/Fields/TextField";
import { Formik } from "$components/Formik";

export const StatusButtonContainer: FunctionComponent<IContainer> = ({
  status,
  setStatus,
  loading,
  ...props
}) => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment />;

  const isRejected = () => status === ApprovalStatus.rejected;
  const label = isRejected() ? translations.reject : translations.approve;
  const { confirmDialogDescription, confirmDialogCancel } = translations;

  const onSubmit = async (
    { moderatorMessage }: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    setSubmitting(false);
    return setStatus(status, moderatorMessage);
  };

  const initialValues: IValues = { moderatorMessage: undefined };
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
        onConfirm={() => setStatus(status)}
        onClose={() => setConfirmDialogIsOpen(false)}
        confirmButtonKind={props.kind}
        confirmButtonType={isRejected() ? "submit" : undefined}
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
