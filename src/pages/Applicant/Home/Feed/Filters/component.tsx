import React, { FunctionComponent } from "react";
import { Headline } from "$components/Headline";
import { AppliedFilters } from "./AppliedFilters";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ApplyFilters } from "./ApplyFilters";
import { IFiltersProps } from "./interface";

export const Filters: FunctionComponent<IFiltersProps> = (
  {
    className,
    filter,
    careers,
    translations
  }
) => (
  <div className={classNames(styles.filtersContainer, className)}>
    <div className={styles.filters}>
      <Headline className={styles.title}>{translations?.title}</Headline>
      <AppliedFilters
        className={styles.appliedFilters}
        filter={filter}
        careers={careers}
      />
      <ApplyFilters
        className={styles.applyFilters}
        filter={filter}
        careers={careers}
        translations={translations}
      />
    </div>
  </div>
);
