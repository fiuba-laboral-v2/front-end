import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IActionsContainerProps {
  setStatus: (status: ApprovalStatus) => void;
  currentStatus: ApprovalStatus;
}

export interface IAdminActionsTranslations {
  approve: string;
  reject: string;
  pending: string;
}

export interface IActionsProps extends IActionsContainerProps {
  translations: IAdminActionsTranslations;
}
