import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ApplyCareerFilters } from "./ApplyCareerFilters";

export const ApplyFilters: FunctionComponent<IApplyFiltersProps> = ({ className }) => (
  <div className={className}>
    <h3 className={styles.title}>Agregar filtros</h3>
    <ApplyCareerFilters/>
  </div>
);

interface IApplyFiltersProps {
  className: string;
}
