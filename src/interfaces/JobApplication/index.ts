import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IJobApplication {
  applicant: IApplicant;
  offer: IOffer;
}
