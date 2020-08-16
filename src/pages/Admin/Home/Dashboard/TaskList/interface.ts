import { TAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IUseAdminTasks } from "$hooks/queries";
import { OptionalFetchResult } from "$interfaces/Pagination";

export interface ITaskListContainerProps {
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  adminTasks?: TAdminTask[];
  statuses: ApprovalStatus[];
  fetchMore: () => OptionalFetchResult<IUseAdminTasks>;
  shouldFetchMore: boolean;
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  none: string;
  approved: string;
  pending: string;
  rejected: string;
  pending_or_rejected: string;
  approved_or_pending: string;
  approved_or_rejected: string;
  approved_or_pending_or_rejected: string;
}
