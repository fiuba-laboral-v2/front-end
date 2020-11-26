import { TAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface ITaskListContainerProps {
  loading: boolean;
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  adminTasks?: TAdminTask[];
  statuses: ApprovalStatus[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations?: ITaskListTranslations;
}

export interface ITaskListTranslations {
  emptyList: string;
  none: string;
  approved: string;
  pending: string;
  rejected: string;
  pending_or_rejected: string;
  approved_or_pending: string;
  approved_or_rejected: string;
  approved_or_pending_or_rejected: string;
}
