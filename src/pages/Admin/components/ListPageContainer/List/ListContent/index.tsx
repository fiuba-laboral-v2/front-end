import React, { FunctionComponent, ReactNode } from "react";
import { Row } from "./Row";
import { Listable } from "../../interfaces";
import { IListContentProps } from "./interface";
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
  <>
    <Row items={items} className={rowClassName}>
      {children as (item: Listable) => ReactNode}
    </Row>
    <PaginationButton
      shouldFetchMore={shouldFetchMore}
      fetchMore={fetchMore}
      className={styles.fetchMore}
      loading={loading}
    />
  </>
);
