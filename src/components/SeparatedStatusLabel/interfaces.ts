import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps {
  className?: string;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
}

export interface ITranslations {
  graduate: string;
  student: string;
  pending: string;
  approved: string;
  rejected: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  extensionTooltipText: string;
  graduadosTooltipText: string;
}
