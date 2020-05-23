import { IJobApplication } from "$interfaces/JobApplication";

export interface IJobApplicationContainerProps {
  jobApplication: IJobApplication;
}

export interface IJobApplicationProps extends IJobApplicationContainerProps {
  applicantDetailRoute: string;
}
