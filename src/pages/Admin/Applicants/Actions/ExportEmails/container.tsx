import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ExportEmails } from "./component";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";
import { IContainerProps } from "./interfaces";

export const ExportEmailsContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<IConfirmDialogTranslations>("exportApplicantEmails");
  return <ExportEmails {...props} translations={translations} />;
};
