import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { MyJobApplications } from "./component";
import { Redirect } from "$components/Redirect";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IJobApplication } from "$interfaces/JobApplication";
import { useQuery } from "$models/hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_MY_JOB_APPLICATIONS } from "$queries";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  document.title = "Mis postulaciones";
  const history = useHistory();
  const response = useQuery<{}, { getMyLatestJobApplications: IJobApplication[] }>(
    GET_MY_JOB_APPLICATIONS,
    {
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden())
      }
    }
  );
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  if (response.loading) return <LoadingSpinner />;

  return (
    <MyJobApplications jobApplications={response.data.getMyLatestJobApplications}/>
  );
};
