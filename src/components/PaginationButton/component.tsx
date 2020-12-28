import React from "react";
import classNames from "classnames";
import { Button } from "$components/Button";
import { IPaginationButtonProps } from "./interfaces";
import { LoadingSpinner } from "$components/LoadingSpinner";
import styles from "./styles.module.scss";

export const PaginationButton = ({
  className,
  spinnerClassName,
  shouldFetchMore,
  fetchMore,
  translations,
  loading,
  listIsEmpty
}: IPaginationButtonProps) => (
  <>
    {loading && (
      <LoadingSpinner
        className={classNames(styles.spinner, spinnerClassName, {
          [styles.emptyList]: listIsEmpty
        })}
      />
    )}
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
