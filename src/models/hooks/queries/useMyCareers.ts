import { useQueryData } from "../useQuery/useQuery";
import { GET_MY_CAREERS } from "$queries";
import { IApplicantCareer } from "$interfaces/Applicant";
import { RoutesBuilder } from "../../RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useMyCareers = () => {
  const history = useHistory();
  const data = useQueryData<{}, { getCurrentUser: { applicant: { careers: IApplicantCareer[] } } }>(
    {
      query: GET_MY_CAREERS,
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
  return data?.getCurrentUser.applicant.careers;
};
