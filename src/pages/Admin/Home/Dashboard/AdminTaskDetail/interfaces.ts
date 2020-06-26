import { IApprovable } from "$interfaces/Approvable";

export interface IAdminTaskDetailContainerProps {
  selectedTask?: IApprovable;
}

export interface IAdminTaskDetailTranslations {
  selectToStart: string;
}

export interface IAdminTaskDetailProps extends IAdminTaskDetailContainerProps {
  translations: IAdminTaskDetailTranslations;
}
