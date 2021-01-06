import { GET_APPLICANT_EMAILS } from "$queries";
import { useLazyQuery, IUseApplicantsFilter } from "$hooks";

export const useLazyApplicantEmails = () => {
  const { query, ...result } = useLazyQuery<IUseApplicantsFilter, IResponse>(GET_APPLICANT_EMAILS);
  return { getApplicantEmails: query, ...result };
};

interface IResponse {
  getApplicantEmails: string[];
}
