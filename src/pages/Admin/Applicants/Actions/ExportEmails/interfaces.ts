import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

export interface IContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IComponentProps extends IContainerProps {
  exportEmailsTranslation?: IConfirmDialogTranslations;
  exportedEmailsTranslation?: IConfirmDialogTranslations;
  onConfirm: () => void;
  exportEmails: boolean;
  setExportEmails: (isOpen: boolean) => void;
  emails: string;
}
