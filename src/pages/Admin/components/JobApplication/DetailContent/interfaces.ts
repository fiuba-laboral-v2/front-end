import { IJobApplication } from "$interfaces/JobApplication";

export interface IContainerProps {
  jobApplicationUuid: string;
  scrollToTop?: () => void;
  className?: string;
}

export interface IComponentProps {
  jobApplication?: IJobApplication;
  className?: string;
  hidden: boolean;
}
