import { useQuery } from "$hooks";
import { GET_CAREERS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICareer } from "$interfaces/Career";

export const useCareers = () => {
  const history = useHistory();
  return useQuery<{}, { getCareers: ICareer[] }>(
    GET_CAREERS,
    {
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};
