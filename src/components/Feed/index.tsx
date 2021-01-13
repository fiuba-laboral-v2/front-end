import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import { List } from "$components/List";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { Title } from "$components/Title";
import { Card } from "$components/Card";
import { AppliedTag } from "$components/AppliedTag";

export const Feed: FunctionComponent<IFeedProps> = ({
  title,
  withAppliedTag = () => false,
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
      {offer => {
        const hasApplied = withAppliedTag(offer);
        return (
          <Card
            key={offer.uuid}
            className={classNames(styles.cardContainer, { [styles.withAppliedTag]: hasApplied })}
            link={createLink(offer.uuid)}
          >
            {hasApplied && <AppliedTag />}
            <Offer data={offer} withStatusLabels={withStatusLabels} />
          </Card>
        );
      }}
    </List>
  </div>
);

interface IFeedProps {
  withStatusLabels: boolean;
  withAppliedTag?: (offer: IOffer) => boolean;
  title?: ReactNode;
  offers: IOffer[];
  createLink: (uuid: string) => string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  className?: string;
  emptyListComponent: ReactNode;
}
