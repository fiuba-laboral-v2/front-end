import React, { FunctionComponent, ReactNode } from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";

export const Feed: FunctionComponent<IFeedProps> = ({
  title,
  offers,
  onCardClick,
  fetchMore,
  shouldFetchMore,
  loading,
  className,
  withStatusLabels,
  emptyListComponent
}) => (
  <div className={className}>
    {title && (
      <Headline color="dark" className={styles.title}>
        {title}
      </Headline>
    )}
    <List
      list={offers}
      fetchMore={fetchMore}
      fetchMoreClassName={styles.fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
      emptyListComponent={emptyListComponent}
    >
      {offer => (
        <Card
          key={offer.uuid}
          className={styles.cardContainer}
          onClick={() => onCardClick(offer.uuid)}
        >
          <Offer data={offer} withStatusLabels={withStatusLabels} />
        </Card>
      )}
    </List>
  </div>
);

interface IFeedProps {
  withStatusLabels: boolean;
  title?: string;
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  className?: string;
  emptyListComponent: ReactNode;
}
