import { CREATE_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType } from "$interfaces/Applicant";

export const useCreateOffer = () =>
  useMutation<ICreateOffer, { createOffer: IOffer & { company: never } }>(
    CREATE_OFFER
  );

export interface ICreateOffer {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}
