import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IStatusFilterTranslations {
  title: string;
  pending: string;
  approved: string;
  rejected: string;
}

export interface ITypeFilterContainerProps {
  statuses: ApprovalStatus[];
  onFilterByStatus: (statuses: ApprovalStatus[]) => void;
}

export interface ITypeFilterProps extends Omit<ITypeFilterContainerProps, "onFilterByStatus"> {
  translations: IStatusFilterTranslations;
  toggleStatus: (status: ApprovalStatus) => void;
}
