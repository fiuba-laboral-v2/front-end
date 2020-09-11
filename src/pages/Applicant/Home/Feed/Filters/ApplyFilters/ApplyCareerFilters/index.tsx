import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { FilterLabels } from "$components/FilterLabels";
import { OfferFilter } from "$models/OfferFilter";
import { ICareer } from "$interfaces/Career";

export const ApplyCareerFilters: FunctionComponent<IApplyCareerFiltersProps> = (
  { filter, careers }
) => {
  const appliedCareerCodes = filter.careerCodes();
  const selectableCareers = careers.filter(career => !appliedCareerCodes.includes(career.code));
  return <>
    <h4 className={styles.title}>Carreras</h4>
    <FilterLabels applied={false}
                  items={selectableCareers}
                  getKey={career => career.code}
                  getLabel={career => career.description}/>
  </>;
};

interface IApplyCareerFiltersProps {
  filter: OfferFilter;
  careers: ICareer[];
}
