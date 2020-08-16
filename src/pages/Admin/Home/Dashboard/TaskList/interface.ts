import { TAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApolloQueryResult } from "@apollo/client";
import { IUseAdminTasks } from "$hooks/queries";

export interface ITaskListContainerProps {
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  adminTasks?: TAdminTask[];
  statuses: ApprovalStatus[];
  fetchMore: () => Promise<ApolloQueryResult<IUseAdminTasks> | undefined>;
  shouldFetchMore: boolean;
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  tasks: string;
  pending: string;
  rejected: string;
  approved: string;
}
