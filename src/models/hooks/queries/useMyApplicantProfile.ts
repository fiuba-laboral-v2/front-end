import { useQuery } from "../useQuery";
import { GET_MY_APPLICANT_PROFILE } from "$queries";
import { IApplicant } from "$interfaces/Applicant";

export const useMyApplicantProfile = () =>
  useQuery<{}, { getCurrentUser: { applicant: IApplicant } }>(GET_MY_APPLICANT_PROFILE);
