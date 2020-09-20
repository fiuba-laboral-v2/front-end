import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { useApprovedOffers, useMyCareers, useTranslations } from "$hooks/queries";
import { Window } from "$components/Window";
import { Filters } from "./Filters";
import styles from "./styles.module.scss";
import { IOfferListTranslations } from "./interface";
import { OfferFilter } from "$models/OfferFilter";

export const FeedContainer: FunctionComponent<IFeedContainerProps> = ({ searchQuery }) => {
  const history = useHistory();
  const careers = useMyCareers();
  const filter = new OfferFilter(searchQuery);
  const offers = useApprovedOffers({ filter, skip: careers.loading });
  const translations = useTranslations<IOfferListTranslations>("applicantOfferList");

  if (searchQuery === "" && careers.data) {
    careers.data.forEach(applicantCareer => filter.addCareer(applicantCareer.career.code));
    const searchParams = filter.toString();
    return <Redirect to={RoutesBuilder.applicant.offerList({ searchParams })}/>;
  }

  if (offers.error || careers.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  return <Window width="fullWidth" className={styles.container}>
    <Filters
      className={styles.filters}
      translations={translations}
      filter={filter}
    />
    <Feed
      className={styles.offers}
      loading={offers.loading}
      offers={offers.data?.getApprovedOffers.results || []}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
      fetchMore={offers.fetchMore}
      shouldFetchMore={offers.data?.getApprovedOffers.shouldFetchMore}
      withStatusLabels={false}
    />
  </Window>;
};

interface IFeedContainerProps {
  searchQuery: string;
}
