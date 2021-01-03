import { useQuery } from "$hooks";
import { GET_MY_CAREERS } from "$queries";
import { IApplicantCareer } from "$interfaces/Applicant";
import { RoutesBuilder } from "../../RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useMyCareers = () => {
  const history = useHistory();
  return useQuery<{}, { getCurrentUser: { applicant: { careers: IApplicantCareer[] } } }>(
    GET_MY_CAREERS,
    {
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  ).data?.getCurrentUser.applicant.careers;
};
