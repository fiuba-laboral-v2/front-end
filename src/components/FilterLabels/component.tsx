import React from "react";
import { FilterLabel } from "$components/FilterLabel";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const FilterLabels = <ListItem, >(
  { items, getKey, getLabel, applied, className }: IFilterLabelsProps<ListItem>
) => (
  <div className={classNames(styles.container, className)}>
    {items.map(item =>
      <FilterLabel applied={applied} className={styles.filter} key={getKey(item)}>
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
}
