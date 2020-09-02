import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps extends ILabelLayoutProps, Partial<ILabelTextProps> {
  status: ApprovalStatus;
}

export interface ITranslations {
  pendingLabel: string;
  approvedLabel: string;
  rejectedLabel: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
