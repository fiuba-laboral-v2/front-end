import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps {
  className?: string;
  detailTitle: string;
  approvalStatus?: ApprovalStatus;
  mobileLayout?: boolean;
}

export interface ITranslations {
  pending: string;
  approved: string;
  rejected: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
