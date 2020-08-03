import React, { FunctionComponent } from "react";
import { Feed } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { useOffers } from "$hooks/queries";

const FeedContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useOffers();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return (
    <Feed
      offers={response.data.getOffers}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.shouldFetchMore}
    />
  );
};

export { FeedContainer };
