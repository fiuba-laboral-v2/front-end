import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { MyJobApplications } from "./component";
import { Redirect } from "$components/Redirect";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IJobApplication } from "$interfaces/JobApplication";
import { useQuery } from "$models/hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_JOB_APPLICATIONS_BY_COMPANY } from "$queries";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useQuery<{}, { getJobApplicationsByCompany: IJobApplication[] }>(
    GET_JOB_APPLICATIONS_BY_COMPANY,
    {
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.forbidden),
        AuthenticationError: () => history.push(RoutesBuilder.login)
      }
    }
  );
  if (response.error) return <Redirect to={RoutesBuilder.internalServerError} />;
  if (response.loading) return <LoadingSpinner />;

  return (
    <MyJobApplications jobApplications={response.data.getJobApplicationsByCompany}/>
  );
};
