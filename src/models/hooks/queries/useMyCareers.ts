import { useQuery } from "../useQuery";
import { GET_MY_CAREERS } from "$queries";
import { IApplicantCareer } from "$interfaces/Applicant";

export const useMyCareers = () => {
  const result = useQuery<{}, { getCurrentUser: { applicant: { careers: IApplicantCareer[] } } }>(
    GET_MY_CAREERS
  );
  return { ...result, data: result.data?.getCurrentUser.applicant.careers };
};
