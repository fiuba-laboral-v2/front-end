import { useQueryData } from "../useQuery";
import { GET_MY_APPLICANT_PROFILE } from "$queries";
import { IApplicant } from "$interfaces/Applicant";
import { RoutesBuilder } from "../../RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useMyApplicantProfile = () => {
  const history = useHistory();
  return useQueryData<{}, { getCurrentUser: { applicant: IApplicant } }>({
    query: GET_MY_APPLICANT_PROFILE,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getCurrentUser.applicant;
};
