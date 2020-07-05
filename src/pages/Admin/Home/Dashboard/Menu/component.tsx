import React, { FunctionComponent } from "react";
import { TypeFilter } from "./TypeFilter";
import { IMenuProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Menu: FunctionComponent<IMenuProps> = (
  {
    filter,
    onFilterByType
  }
) => (
  <div className={styles.menuContent}>
    <TypeFilter
      types={filter.approvableEntityTypes}
      onChangeFilter={onFilterByType}
    />
  </div>
);
