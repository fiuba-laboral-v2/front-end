import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";

export interface IJobApplication {
  uuid: string;
  updatedAt: string;
  applicant: IApplicant;
  offer: IOffer;
}
