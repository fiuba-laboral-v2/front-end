import { ILabelLayoutProps } from "$components/Label";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps extends ILabelLayoutProps {
  status: ApprovalStatus;
}

export interface ITranslations {
  pending: string;
  approved: string;
  rejected: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
