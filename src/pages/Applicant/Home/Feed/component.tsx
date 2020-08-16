import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import { Window } from "$components/Window";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";
import { ApolloQueryResult } from "@apollo/client";
import { IUseOffers } from "$hooks/queries";

const Feed: FunctionComponent<IFeedProps> = (
  {
    title,
    offers,
    onCardClick,
    fetchMore,
    shouldFetchMore
  }
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

interface IFeedProps {
  title?: string;
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
  fetchMore?: () => Promise<ApolloQueryResult<IUseOffers> | undefined>;
  shouldFetchMore?: boolean;
}

export { Feed };
