import React, { FunctionComponent } from "react";
import { OfferFilter } from "$models/OfferFilter";
import { ICareer } from "$interfaces/Career";
import { FilterLabels } from "$components/FilterLabels";

export const AppliedFilters: FunctionComponent<IAppliedFiltersProps> = (
  { className, filter, careers }
) => {
  const appliedCareerCodes = filter.careerCodes();
  const appliedCareers = careers.filter(career => appliedCareerCodes.includes(career.code));
  return <FilterLabels applied
                       className={className}
                       items={appliedCareers}
                       getKey={career => career.code}
                       getLabel={career => career.description}/>;
};

interface IAppliedFiltersProps {
  filter: OfferFilter;
  careers: ICareer[];
  className?: string;
}
