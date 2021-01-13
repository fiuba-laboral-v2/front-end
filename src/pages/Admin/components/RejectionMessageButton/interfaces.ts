export interface ITranslations {
  label: string;
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
  confirmDialogConfirm: string;
}

interface ICommonProps {
  className?: string;
}

export type GetRejectionMessage = (uuid: string) => Promise<string | undefined>;
export interface IUseRejectionMessage {
  getRejectionMessage: GetRejectionMessage;
  loading?: boolean;
  data?: string;
}

export interface IContainerProps extends ICommonProps {
  useRejectionMessage: IUseRejectionMessage;
  adminTaskUuid: string;
}

export interface IComponentProps extends ICommonProps {
  translations?: ITranslations;
  message?: string;
  showMessage: boolean;
  setShowMessage: (showMessage: boolean) => void;
  onClick: () => void;
  loading?: boolean;
}
