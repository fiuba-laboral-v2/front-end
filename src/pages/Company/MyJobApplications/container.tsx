import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { MyJobApplications } from "./component";
import { Redirect } from "$components/Redirect";
import { EmptyList } from "$components/EmptyList";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useMyJobApplications } from "$hooks/queries/useMyJobApplications";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useMyJobApplications();
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <MyJobApplications
      jobApplications={response.data?.getMyLatestJobApplications.results || []}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getMyLatestJobApplications.shouldFetchMore}
      loading={response.loading}
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="jobApplicationEmptyOfferList"
          buttonKind="primary"
          onClick={() => history.push(RoutesBuilder.company.createOffer())}
        />
      }
    />
  );
};
