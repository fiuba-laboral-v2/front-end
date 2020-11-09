import { IJobApplicationNotification } from "$hooks";

export interface ITranslations {
  companyTitle: string;
  pendingApplicantTitle: string;
  approvedApplicantTitle: string;
  rejectedApplicantTitle: string;
}

export interface IContainerProps {
  notification: IJobApplicationNotification;
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  title: string;
}
