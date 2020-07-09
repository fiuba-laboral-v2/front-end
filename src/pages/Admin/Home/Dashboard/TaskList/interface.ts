import { TAdminTask } from "$interfaces/AdminTask";

export interface ITaskListContainerProps {
  onSelectTask: (task: TAdminTask) => void;
  selectedTask?: TAdminTask;
  adminTasks?: TAdminTask[];
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  pendingTasks: string;
}
