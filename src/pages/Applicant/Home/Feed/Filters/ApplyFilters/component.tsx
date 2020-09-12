import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ApplyCareerFilters } from "./ApplyCareerFilters";
import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/OfferFilter";
import { IOfferListTranslations } from "../../interface";

export const ApplyFilters: FunctionComponent<IApplyFiltersProps> = (
  {
    className,
    filter,
    careers,
    translations
  }
) => (
  <div className={className}>
    <h3 className={styles.title}>{translations?.addFilters}</h3>
    <ApplyCareerFilters filter={filter} careers={careers} translations={translations}/>
  </div>
);

interface IApplyFiltersProps {
  className: string;
  filter: OfferFilter;
  careers: ICareer[];
  translations?: IOfferListTranslations;
}
