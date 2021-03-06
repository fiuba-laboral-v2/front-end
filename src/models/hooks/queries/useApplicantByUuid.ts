import { useQuery } from "$hooks";
import { GET_APPLICANT } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IApplicant } from "$interfaces/Applicant";

export const useApplicantByUuid = (uuid: string) => {
  const history = useHistory();
  return useQuery<{}, { getApplicant: IApplicant }>(GET_APPLICANT, {
    variables: { uuid },
    errorHandlers: {
      ApplicantNotFound: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.data?.getApplicant;
};
