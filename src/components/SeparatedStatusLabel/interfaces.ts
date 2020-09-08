import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TargetApplicantType } from "$interfaces/Offer";

interface ICommonProps {
  className?: string;
  withoutBackground?: boolean;
  statusClassName?: string;
}

export interface IContainerProps extends ICommonProps {
  targetApplicantType: TargetApplicantType;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
}

export interface IComponentProps extends Partial<ICommonProps> {
  graduados?: {
    tooltipText: string;
    text: string;
    status: ApprovalStatus;
  };
  extension?: {
    tooltipText: string;
    text: string;
    status: ApprovalStatus;
  };
}
