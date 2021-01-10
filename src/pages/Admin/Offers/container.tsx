import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { IOffer } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { useOffers } from "$hooks/queries";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { Filter } from "./Filter";
import { ListContentItem } from "./ListContentItem";
import { FiltersButton } from "../components/FiltersButton";

import styles from "./styles.module.scss";

export const Offers: FunctionComponent<IContainerProps> = ({ searchQuery }) => {
  const [showFilter, setShowFilter] = useState(!!searchQuery);
  const history = useHistory();
  const filter = new OffersFilter(searchQuery);
  const response = useOffers(filter);
  const offers = response?.data?.getOffers.results;

  const onClickFilter = () => {
    setShowFilter(!showFilter);
    filter.clear();
    history.push(RoutesBuilder.admin.offers({ searchParams: filter.toString() }));
  };

  return (
    <ListPageContainer
      titleTranslationPath={"adminOfferListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(offer: IOffer) => <ListContentItem offer={offer} />}
      filter={<Filter filter={filter} refetchOffers={response.refetch} showFilter={showFilter} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={offers}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getOffers.shouldFetchMore}
      loading={response.loading}
    >
      <FiltersButton showFilter={showFilter} onClick={onClickFilter} />
    </ListPageContainer>
  );
};

interface IContainerProps {
  searchQuery: string;
}
