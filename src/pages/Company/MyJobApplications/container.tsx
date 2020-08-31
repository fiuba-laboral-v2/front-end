import React, { FunctionComponent } from "react";
import { MyJobApplications } from "./component";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useMyJobApplications } from "$hooks/queries/useMyJobApplications";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  const response = useMyJobApplications();
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <MyJobApplications
      jobApplications={response.data?.getMyLatestJobApplications.results || []}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getMyLatestJobApplications.shouldFetchMore || false}
      loading={response.loading}
    />
  );
};
