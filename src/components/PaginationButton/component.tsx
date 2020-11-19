import React from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { IPaginationButtonProps } from "./interfaces";

import styles from "./styles.module.scss";

export const PaginationButton = ({
  className,
  shouldFetchMore,
  fetchMore,
  translations,
  loading
}: IPaginationButtonProps) => (
  <>
    {shouldFetchMore && fetchMore && !loading && (
      <Button
        kind="primary"
        onClick={fetchMore}
        className={classNames(styles.fetchMoreButton, className)}
      >
        {translations.fetchMore}
      </Button>
    )}
  </>
);
