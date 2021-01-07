import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";
import { ApplicantsFilter } from "$models/ApplicantsFilter";

interface ICommonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IContainerProps extends ICommonProps {
  filter: ApplicantsFilter;
}

export interface IComponentProps extends ICommonProps {
  exportEmailsTranslation?: IConfirmDialogTranslations;
  exportedEmailsTranslation?: IConfirmDialogTranslations;
  onConfirm: () => void;
  exportEmails: boolean;
  setExportEmails: (isOpen: boolean) => void;
  emails: string;
  loading: boolean;
}
