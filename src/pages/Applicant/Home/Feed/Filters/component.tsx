import React, { FunctionComponent } from "react";
import { Headline } from "$components/Headline";
import { AppliedFilters } from "./AppliedFilters";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ApplyFilters } from "./ApplyFilters";

export const Filters: FunctionComponent<IFiltersProps> = ({ className }) => (
  <div className={classNames(styles.filtersContainer, className)}>
    <div className={styles.filters}>
      <Headline className={styles.title}>Ofertas de trabajo</Headline>
      <AppliedFilters className={styles.appliedFilters}/>
      <ApplyFilters className={styles.applyFilters}/>
    </div>
  </div>
);

interface IFiltersProps {
  className?: string;
}
