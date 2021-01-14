import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import { List } from "$components/List";
import { Offer } from "./Offer";
import { Card } from "$components/Card";
import { AppliedTag } from "$components/AppliedTag";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const Feed: FunctionComponent<IFeedProps> = ({
  title,
  withAppliedTag = () => false,
  offers,
  createLink,
  fetchMore,
  shouldFetchMore,
  loading,
  className,
  cardContainerClassName,
  withStatusLabels,
  emptyListComponent
}) => (
  <div className={className}>
    {title}
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
            className={classNames(cardContainerClassName, styles.cardContainer, {
              [styles.withAppliedTag]: hasApplied
            })}
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
  cardContainerClassName?: string;
  emptyListComponent: ReactNode;
}
