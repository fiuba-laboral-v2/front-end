import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { useOffers } from "$hooks/queries";

export const FeedContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useOffers();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <Feed
      loading={response.loading}
      offers={response.data?.getOffers.results || []}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getOffers.shouldFetchMore}
    />
  );
};
