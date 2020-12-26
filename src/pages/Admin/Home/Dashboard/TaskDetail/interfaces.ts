import { TAdminTask } from "$interfaces/AdminTask";

interface IBaseDetailInfoProps {
  onStatusUpdate?: () => void;
  refetchAdminTasks?: () => void;
  setLoadingStatusUpdate?: (loading: boolean) => void;
}

export interface ICompanyDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTaskUuid: string;
}

export interface IApplicantDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTaskUuid: string;
}

export interface IOfferDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTaskUuid: string;
}

export interface IJobApplicationDetailInfoContainerProps extends IBaseDetailInfoProps {
  selectedTaskUuid: string;
}

export interface ITaskDetailProps extends IBaseDetailInfoProps {
  selectedTask?: TAdminTask;
}
