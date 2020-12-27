import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IContainerProps {
  jobApplicationUuid: string;
  scrollToTop?: () => void;
  className?: string;
}

export interface IComponentProps {
  applicant?: IApplicant;
  offer?: IOffer;
  className?: string;
  hidden: boolean;
}
