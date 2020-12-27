import React, { FunctionComponent, ReactNode } from "react";
import { List } from "$components/List";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { Title } from "$components/Title";
import { Card } from "../Card";

export const Feed: FunctionComponent<IFeedProps> = ({
  title,
  offers,
  createLink,
  fetchMore,
  shouldFetchMore,
  loading,
  className,
  withStatusLabels,
  emptyListComponent
}) => (
  <div className={className}>
    {title && <Title className={styles.title}>{title}</Title>}
    <List
      list={offers}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
      emptyListComponent={emptyListComponent}
    >
      {offer => (
        <Card key={offer.uuid} className={styles.cardContainer} link={createLink(offer.uuid)}>
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
  createLink: (uuid: string) => string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  className?: string;
  emptyListComponent: ReactNode;
}
