import { IApprovable, IApprovableFilter } from "$interfaces/Approvable";

export interface ITaskListContainerProps {
  onSelectTask: (task: IApprovable) => void;
  selectedTask?: IApprovable;
  filter: IApprovableFilter;
}

export interface ITaskListProps extends Omit<ITaskListContainerProps, "filter"> {
  approvableEntities: IApprovable[];
  translations: ITaskListTranslations;
}

export interface ITaskListTranslations {
  pendingTasks: string;
}
