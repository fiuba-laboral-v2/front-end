import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import { Row } from "./Row";
import { Listable } from "../../interfaces";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Button } from "$components/Button";
import { IListContentProps } from "./interface";

import styles from "./styles.module.scss";

export const ListContent: FunctionComponent<IListContentProps> = (
  {
    items,
    rowClassName,
    loading,
    shouldFetchMore,
    fetchMore,
    translations,
    children
  }
) => (
  <>
    <Row items={items} className={rowClassName}>
      { children as (item: Listable) => ReactNode }
    </Row>
    {
      loading &&
      <LoadingSpinner/>
    }
    {
      shouldFetchMore && fetchMore && !loading &&
      <Button
        kind="primary"
        onClick={fetchMore}
        className={classNames(styles.fetchMoreButton)}
      >
        {translations.fetchMore}
      </Button>
    }
  </>
);
