import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IStatusFilterTranslations {
  title: string;
  pending: string;
  approved: string;
  rejected: string;
}

interface ITypeFilterProps {
  statuses: ApprovalStatus[];
}

export interface ITypeFilterContainerProps extends ITypeFilterProps {
  onFilterByStatus: (statuses: ApprovalStatus[]) => void;
}

export interface ITypeFilterComponentProps extends ITypeFilterProps {
  translations: IStatusFilterTranslations;
  toggleStatus: (status: ApprovalStatus) => void;
}
