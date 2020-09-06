import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { useApprovedOffers } from "$hooks/queries";

export const FeedContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useApprovedOffers();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <Feed
      loading={response.loading}
      offers={response.data?.getApprovedOffers.results || []}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getApprovedOffers.shouldFetchMore}
    />
  );
};
