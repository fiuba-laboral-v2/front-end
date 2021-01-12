export interface ITranslations {
  label: string;
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
  confirmDialogConfirm: string;
}

export interface IContainerProps {
  getRejectionMessage: (uuid: string) => Promise<string | undefined>;
  adminTaskUuid: string;
}

export interface IComponentProps {
  translations?: ITranslations;
  message: string;
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
  onClick: () => void;
}
