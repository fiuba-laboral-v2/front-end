import React from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import { Window } from "$components/Window";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";
import { OptionalFetchResult } from "$interfaces/Pagination";

const Feed = <QueryResult, >(
  {
    title,
    offers,
    onCardClick,
    fetchMore,
    shouldFetchMore
  }: IFeedProps<QueryResult>
) => (
  <Window>
    {title && <Headline color={"dark"} className={styles.title}>{title}</Headline>}
    <div>
      <List list={offers} fetchMore={fetchMore} shouldFetchMore={shouldFetchMore}>
        {(ref, offer) => (
          <Card
            _ref={ref}
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
  fetchMore?: () => OptionalFetchResult<QueryResult>;
  shouldFetchMore?: boolean;
}

export { Feed };
