import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IJobApplication {
  createdAt: string;
  applicant: IApplicant;
  offer: IOffer;
}
