import { useAdvancedQuery } from "$hooks";
import { GET_JOB_APPLICATION_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { JobApplication } from "$models/JobApplication";
import { useHistory } from "react-router-dom";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";

export const useJobApplicationByUuid = (uuid: string) => {
  const history = useHistory();
  const result = useAdvancedQuery<{}, { getJobApplicationByUuid: IJobApplicationAttributes }>(
    GET_JOB_APPLICATION_BY_UUID,
    {
      variables: { uuid },
      errorHandlers: {
        JobApplicationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );

  const getJobApplicationByUuid = result?.data?.getJobApplicationByUuid;
  return getJobApplicationByUuid && JobApplication(getJobApplicationByUuid);
};
