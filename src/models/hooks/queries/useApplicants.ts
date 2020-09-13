import { useQuery } from "$hooks";
import { GET_APPLICANTS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IApplicant } from "$interfaces/Applicant";

export const useApplicants = () => {
  const history = useHistory();
  return useQuery<{}, { getApplicants: IApplicant[] }>(
    GET_APPLICANTS,
    {
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};
