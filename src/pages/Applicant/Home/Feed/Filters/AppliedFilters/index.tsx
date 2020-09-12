import React, { FunctionComponent } from "react";
import { OfferFilter } from "$models/OfferFilter";
import { ICareer } from "$interfaces/Career";
import { FilterLabels } from "$components/FilterLabels";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const AppliedFilters: FunctionComponent<IAppliedFiltersProps> = (
  { className, filter, careers }
) => {
  const history = useHistory();
  const appliedCareerCodes = filter.careerCodes();
  const appliedCareers = careers.filter(career => appliedCareerCodes.includes(career.code));
  return <FilterLabels
    applied
    className={className}
    items={appliedCareers}
    getKey={career => career.code}
    getLabel={career => career.description}
    onClick={career => {
      filter.removeCareer(career.code);
      const searchParams = filter.toString();
      history.push(RoutesBuilder.applicant.offerList({ searchParams }));
    }}
  />;
};

interface IAppliedFiltersProps {
  filter: OfferFilter;
  careers: ICareer[];
  className?: string;
}
