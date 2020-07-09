import { AdminTask } from "$interfaces/AdminTask";

export interface ITaskListContainerProps {
  onSelectTask: (task: AdminTask) => void;
  selectedTask?: AdminTask;
  adminTasks?: AdminTask[];
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  pendingTasks: string;
}
