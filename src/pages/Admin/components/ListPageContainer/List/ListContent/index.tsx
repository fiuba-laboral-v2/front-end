import React, { FunctionComponent, ReactNode } from "react";
import { Row } from "./Row";
import { Listable } from "../../interfaces";
import { IListContentProps } from "./interfaces";
import { PaginationButton } from "$components/PaginationButton";

import styles from "./styles.module.scss";

export const ListContent: FunctionComponent<IListContentProps> = ({
  items,
  rowClassName,
  loading,
  shouldFetchMore,
  fetchMore,
  children
}) => (
  <div className={styles.listContent}>
    <Row items={items} className={rowClassName}>
      {children as (item: Listable) => ReactNode}
    </Row>
    <PaginationButton
      listIsEmpty={items.length === 0}
      shouldFetchMore={shouldFetchMore}
      fetchMore={fetchMore}
      className={styles.fetchMore}
      loading={loading}
    />
  </div>
);
