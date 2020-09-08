import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";

export const Feed: FunctionComponent<IFeedProps> = (
  {
    title,
    offers,
    onCardClick,
    fetchMore,
    shouldFetchMore,
    loading,
    className
  }
) => (
  <div className={className}>
    {title && <Headline color="dark" className={styles.title}>{title}</Headline>}
    <div>
      <List
        list={offers}
        fetchMore={fetchMore}
        fetchMoreClassName={styles.fetchMore}
        shouldFetchMore={shouldFetchMore}
        loading={loading}
      >
        {offer => (
          <Card
            key={offer.uuid}
            className={styles.cardContainer}
            onClick={() => onCardClick(offer.uuid)}
          >
            <Offer data={offer}/>
          </Card>
        )}
      </List>
    </div>
  </div>
);

interface IFeedProps {
  title?: string;
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  className?: string;
}
