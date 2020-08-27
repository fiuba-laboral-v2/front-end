import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IContainerProps {
  applicantUuid: string;
  offerUuid: string;
  scrollToTop: () => void;
  className?: string;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}

export interface IComponentProps {
  setStatus: (status: ApprovalStatus) => void;
  applicant: IApplicant;
  offer: IOffer;
  className?: string;
}
