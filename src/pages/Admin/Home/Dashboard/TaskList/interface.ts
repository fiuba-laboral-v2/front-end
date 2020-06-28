import { IApprovable } from "$interfaces/Approvable";

export interface ITaskListContainerProps {
  onSelectTask: (task: IApprovable) => void;
}

export interface ITaskListProps extends ITaskListContainerProps {
  approvableEntities: IApprovable[];
}
