import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IJobApplication {
  updatedAt: string;
  applicant: IApplicant;
  offer: IOffer;
}
