import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ApplyCareerFilters } from "./ApplyCareerFilters";
import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/OfferFilter";

export const ApplyFilters: FunctionComponent<IApplyFiltersProps> = (
  { className, filter, careers }
) => (
  <div className={className}>
    <h3 className={styles.title}>Agregar filtros</h3>
    <ApplyCareerFilters filter={filter} careers={careers}/>
  </div>
);

interface IApplyFiltersProps {
  className: string;
  filter: OfferFilter;
  careers: ICareer[];
}
