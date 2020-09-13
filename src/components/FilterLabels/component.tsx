import React from "react";
import { FilterLabel } from "$components/FilterLabel";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { sortBy } from "lodash";

export const FilterLabels = <ListItem, >(
  {
    items,
    getKey,
    getLabel,
    applied,
    className,
    onClick
  }: IFilterLabelsProps<ListItem>
) => (
  <div className={classNames(styles.container, className)}>
    {sortBy(items, getLabel).map(item =>
      <FilterLabel
        applied={applied}
        className={styles.filter}
        key={getKey(item)}
        onClick={() => onClick(item)}
      >
        {getLabel(item)}
      </FilterLabel>
    )}
  </div>
);

interface IFilterLabelsProps<ListItem> {
  items: ListItem[];
  getKey: (item: ListItem) => string;
  getLabel: (item: ListItem) => string;
  applied: boolean;
  className?: string;
  onClick: (item: ListItem) => void;
}
