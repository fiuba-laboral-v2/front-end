import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

export interface IContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IComponentProps extends IContainerProps {
  translations?: IConfirmDialogTranslations;
}
