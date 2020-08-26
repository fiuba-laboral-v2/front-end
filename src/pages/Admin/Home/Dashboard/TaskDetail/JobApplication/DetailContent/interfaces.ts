import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IContainerProps {
  applicantUuid: string;
  offerUuid: string;
  scrollToTop: () => void;
}

export interface IComponentProps {
  applicant: IApplicant;
  offer: IOffer;
}
