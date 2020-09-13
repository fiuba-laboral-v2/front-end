import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { useApprovedOffers, useTranslations } from "$hooks/queries";
import { Window } from "$components/Window";
import { Filters } from "./Filters";
import styles from "./styles.module.scss";
import { IOfferListTranslations } from "./interface";
import { OfferFilter } from "$models/OfferFilter";

export const FeedContainer: FunctionComponent<IFeedContainerProps> = ({ searchQuery }) => {
  const history = useHistory();
  const filter = new OfferFilter(searchQuery);
  const response = useApprovedOffers({ filter });
  const translations = useTranslations<IOfferListTranslations>("applicantOfferList");

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <Window width="fullWidth" className={styles.container}>
    <Filters
      className={styles.filters}
      translations={translations}
      filter={filter}
    />
    <Feed
      className={styles.offers}
      loading={response.loading}
      offers={response.data?.getApprovedOffers.results || []}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getApprovedOffers.shouldFetchMore}
      withStatusLabels={false}
    />
  </Window>;
};

interface IFeedContainerProps {
  searchQuery: string;
}
