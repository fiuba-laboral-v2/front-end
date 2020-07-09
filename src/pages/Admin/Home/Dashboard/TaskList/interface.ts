import { IApprovable } from "$interfaces/AdminTask";

export interface ITaskListContainerProps {
  onSelectTask: (task: IApprovable) => void;
  selectedTask?: IApprovable;
  approvableEntities?: IApprovable[];
}

export interface ITaskListProps extends ITaskListContainerProps {
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  pendingTasks: string;
}
