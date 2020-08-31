import React from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import { Window } from "$components/Window";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";

const Feed = <QueryResult, >(
  {
    title,
    offers,
    onCardClick,
    fetchMore,
    shouldFetchMore,
    loading
  }: IFeedProps<QueryResult>
) => (
  <Window>
    {title && <Headline color={"dark"} className={styles.title}>{title}</Headline>}
    <div>
      <List list={offers} fetchMore={fetchMore} shouldFetchMore={shouldFetchMore} loading={loading}>
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
  </Window>
);

interface IFeedProps<QueryResult> {
  title?: string;
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}

export { Feed };
