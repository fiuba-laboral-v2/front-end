import React, { FunctionComponent } from "react";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { IOffer } from "$interfaces/Offer";
import { useOffers } from "$hooks/queries";

import styles from "./styles.module.scss";

export const Offers: FunctionComponent = () => {
  const response = useOffers();
  const offers = response?.data?.getOffers.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminOfferListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(offer: IOffer) => <ListContentItem offer={offer} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={offers}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getOffers.shouldFetchMore}
      loading={response.loading}
    />
  );
};
