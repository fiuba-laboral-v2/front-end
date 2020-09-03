import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps {
  className?: string;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
}

export interface ITranslations {
  extensionTooltip: string;
  graduadosTooltip: string;
  graduate: string;
  student: string;
  pending: string;
  approved: string;
  rejected: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  extensionText: string;
  graduadosText: string;
}
