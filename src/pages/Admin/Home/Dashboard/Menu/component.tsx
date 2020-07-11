import React, { FunctionComponent } from "react";
import { TypeFilter } from "./TypeFilter";
import { StatusFilter } from "./StatusFilter";
import { IMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenuProps> = (
  {
    filter,
    onFilter
  }
) => (
  <div className={styles.menuContent}>
    <TypeFilter
      className={styles.typeFilter}
      types={filter.adminTaskTypes}
      onFilterByType={types => onFilter("adminTaskTypes", types)}
    />
    <StatusFilter
      statuses={filter.statuses}
      onFilterByStatus={statuses => onFilter("statuses", statuses)}
    />
  </div>
);
