import React, { FunctionComponent, useState } from "react";
import { useTranslations, useLazyApplicantEmails } from "$hooks";
import { ExportEmails } from "./component";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";
import { IContainerProps } from "./interfaces";

export const ExportEmailsContainer: FunctionComponent<IContainerProps> = ({ filter, ...props }) => {
  const { getApplicantEmails, loading, data } = useLazyApplicantEmails();
  const [exportEmails, setExportEmails] = useState(false);
  const exportEmailsTranslation = useTranslations<IConfirmDialogTranslations>(
    "exportApplicantEmails"
  );
  const exportedEmailsTranslation = useTranslations<IConfirmDialogTranslations>(
    "exportedApplicantEmails"
  );
  const onConfirm = async () => {
    await getApplicantEmails({ variables: filter.getValues() });
  };

  return (
    <ExportEmails
      loading={loading}
      emails={(data?.getApplicantEmails || []).map(email => `${email};`).join("\n")}
      {...props}
      exportEmailsTranslation={exportEmailsTranslation}
      exportedEmailsTranslation={exportedEmailsTranslation}
      onConfirm={onConfirm}
      exportEmails={exportEmails}
      setExportEmails={setExportEmails}
    />
  );
};
