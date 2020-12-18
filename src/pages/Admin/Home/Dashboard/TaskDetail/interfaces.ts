import {
  IApplicantAdminTask,
  ICompanyAdminTask,
  IJobApplicationAdminTask,
  IOfferAdminTask,
  TAdminTask
} from "$interfaces/AdminTask";

interface IBaseDetailInfoProps {
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
  setLoadingStatusUpdate: (loading: boolean) => void;
}

export interface ICompanyDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTask: ICompanyAdminTask;
}

export interface IApplicantDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTask: IApplicantAdminTask;
}

export interface IOfferDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTask: IOfferAdminTask;
}

export interface IJobApplicationDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTask: IJobApplicationAdminTask;
}

export interface ITaskDetailProps extends IBaseDetailInfoProps {
  selectedTask?: TAdminTask;
}
