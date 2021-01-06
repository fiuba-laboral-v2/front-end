import React, { FunctionComponent, useState } from "react";
import { useTranslations } from "$hooks";
import { ExportEmails } from "./component";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";
import { IContainerProps } from "./interfaces";

export const ExportEmailsContainer: FunctionComponent<IContainerProps> = props => {
  const [exportEmails, setExportEmails] = useState(false);
  const exportEmailsTranslation = useTranslations<IConfirmDialogTranslations>(
    "exportApplicantEmails"
  );
  const exportedEmailsTranslation = useTranslations<IConfirmDialogTranslations>(
    "exportedApplicantEmails"
  );
  const onConfirm = () => {
    setExportEmails(false);
  };

  return (
    <ExportEmails
      emails={"sebastian@gmail.com;sebastian@gmail.com;sebastian@gmail.com;sebastian@gmail.com;"}
      {...props}
      exportEmailsTranslation={exportEmailsTranslation}
      exportedEmailsTranslation={exportedEmailsTranslation}
      onConfirm={onConfirm}
      exportEmails={exportEmails}
      setExportEmails={setExportEmails}
    />
  );
};
