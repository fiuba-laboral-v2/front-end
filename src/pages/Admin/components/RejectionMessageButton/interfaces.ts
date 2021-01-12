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
  loading?: boolean;
}

export interface IComponentProps {
  translations?: ITranslations;
  message: string;
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
  onClick: () => void;
  loading?: boolean;
}
