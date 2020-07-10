import React, { FunctionComponent } from "react";
import { TypeFilter } from "./TypeFilter";
import { StatusFilter } from "./StatusFilter";
import { IMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenuProps> = (
  {
    filter,
    onFilterByType,
    onFilterByStatus
  }
) => (
  <div className={styles.menuContent}>
    <TypeFilter
      types={filter.adminTaskTypes}
      onFilterByType={onFilterByType}
    />
    <StatusFilter
      statuses={filter.statuses}
      onFilterByStatus={onFilterByStatus}
    />
  </div>
);
