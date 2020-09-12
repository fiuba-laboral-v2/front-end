import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { FilterLabels } from "$components/FilterLabels";
import { OfferFilter } from "$models/OfferFilter";
import { ICareer } from "$interfaces/Career";
import { IOfferListTranslations } from "../../../interface";

export const ApplyCareerFilters: FunctionComponent<IApplyCareerFiltersProps> = (
  { filter, careers, translations }
) => {
  const appliedCareerCodes = filter.careerCodes();
  const selectableCareers = careers.filter(career => !appliedCareerCodes.includes(career.code));
  return <>
    <h4 className={styles.title}>{translations?.careers}</h4>
    <FilterLabels
      applied={false}
      items={selectableCareers}
      getKey={career => career.code}
      getLabel={career => career.description}
    />
  </>;
};

interface IApplyCareerFiltersProps {
  filter: OfferFilter;
  careers: ICareer[];
  translations?: IOfferListTranslations;
}
