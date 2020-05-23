import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { MyJobApplications } from "./component";
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
        AuthenticationError: () => history.push(RoutesBuilder.login),
        defaultHandler: () => history.push(RoutesBuilder.internalServerError)
      }
    }
  );
  if (response.error) return <Fragment />;
  if (response.loading) return <LoadingSpinner />;

  return (
    <MyJobApplications jobApplications={response.data.getJobApplicationsByCompany}/>
  );
};
