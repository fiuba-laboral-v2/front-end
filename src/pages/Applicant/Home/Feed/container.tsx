import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { useApprovedOffers, useMyCareers, useTranslations } from "$hooks/queries";
import { Window } from "$components/Window";
import { EmptyList } from "$components/EmptyList";
import { Filters } from "./Filters";
import { IOfferListTranslations } from "./interfaces";
import { OfferFilter } from "$models/OfferFilter";

import styles from "./styles.module.scss";

export const FeedContainer: FunctionComponent<IFeedContainerProps> = ({ searchQuery }) => {
  const history = useHistory();
  const careers = useMyCareers();
  const filter = new OfferFilter(searchQuery);
  const offers = useApprovedOffers({ filter, skip: !careers });
  const translations = useTranslations<IOfferListTranslations>("applicantOfferList");

  if (searchQuery === "" && careers) {
    careers.forEach(applicantCareer => filter.addCareer(applicantCareer.career.code));
    const searchParams = filter.toString();
    return <Redirect to={RoutesBuilder.applicant.offerList({ searchParams })} />;
  }

  if (offers.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  return (
    <Window width="fullWidth" className={styles.container}>
      <Filters className={styles.filters} translations={translations} filter={filter} />
      <Feed
        className={styles.offers}
        loading={offers.loading}
        offers={offers.data?.getApprovedOffers.results || []}
        createLink={(uuid: string) => RoutesBuilder.applicant.offerDetail(uuid)}
        fetchMore={offers.fetchMore}
        shouldFetchMore={offers.data?.getApprovedOffers.shouldFetchMore}
        withStatusLabels={false}
        emptyListComponent={
          <EmptyList
            className={styles.listPlaceholder}
            emptyTranslationSource="applicantEmptyOfferList"
            buttonKind="secondary"
            onClick={() => {
              filter.clear();
              const searchParams = filter.toString();
              history.push(RoutesBuilder.applicant.offerList({ searchParams }));
            }}
          />
        }
      />
    </Window>
  );
};

interface IFeedContainerProps {
  searchQuery: string;
}
