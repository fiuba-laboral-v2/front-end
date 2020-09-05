import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TargetApplicantType } from "$interfaces/Offer";

interface ICommonProps {
  className?: string;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  withoutBackground?: boolean;
  statusClassName?: string;
}

export interface IContainerProps extends ICommonProps {
  targetApplicantType: TargetApplicantType;
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

export interface IComponentProps extends Partial<ICommonProps> {
  translations: ITranslations;
  extensionText: string;
  graduadosText: string;
}
