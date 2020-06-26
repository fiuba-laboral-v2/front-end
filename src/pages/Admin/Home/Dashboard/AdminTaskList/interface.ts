import { IApprovable } from "$interfaces/Approvable";

export interface IAdminTaskListContainerProps {
  onSelectTask: (task: IApprovable) => void;
}

export interface IAdminTaskListProps extends IAdminTaskListContainerProps {
  approvableEntities: IApprovable[];
}
