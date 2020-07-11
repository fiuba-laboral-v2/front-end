import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IActionsContainerProps {
  setStatus: (status: ApprovalStatus) => void;
}

export interface IAdminActionsTranslations {
  approve: string;
  reject: string;
}

export interface IActionsProps extends IActionsContainerProps {
  translations: IAdminActionsTranslations;
}
