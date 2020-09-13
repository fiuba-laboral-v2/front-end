import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { FilterLabels } from "$components/FilterLabels";
import { OfferFilter } from "$models/OfferFilter";
import { ICareer } from "$interfaces/Career";
import { IOfferListTranslations } from "../../../interface";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const ApplyCareerFilters: FunctionComponent<IApplyCareerFiltersProps> = (
  { filter, careers, translations }
) => {
  const history = useHistory();
  const appliedCareerCodes = filter.careerCodes();
  const selectableCareers = careers.filter(career => !appliedCareerCodes.includes(career.code));
  return <>
    <h4 className={styles.title}>{translations?.careers}</h4>
    <FilterLabels
      applied={false}
      items={selectableCareers}
      getKey={career => career.code}
      getLabel={career => career.description}
      onClick={career => {
        filter.addCareer(career.code);
        const searchParams = filter.toString();
        history.push(RoutesBuilder.applicant.offerList({ searchParams }));
      }}
    />
  </>;
};

interface IApplyCareerFiltersProps {
  filter: OfferFilter;
  careers: ICareer[];
  translations?: IOfferListTranslations;
}
