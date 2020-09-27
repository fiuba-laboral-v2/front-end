import { CREATE_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { ApplicantType } from "$interfaces/Applicant";

export const useCreateOffer = () => {
  const { mutation, ...result } = useMutation<ICreateOffer, ICreateOfferResponse>(CREATE_OFFER);
  return { createOffer: mutation, ...result };
};

interface ICreateOfferResponse {
  createOffer: { uuid: string };
}

export interface ICreateOffer {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}
