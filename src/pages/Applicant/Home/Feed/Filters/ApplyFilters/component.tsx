import React, { FunctionComponent } from "react";
import { ApplyCareerFilters } from "./ApplyCareerFilters";
import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/OfferFilter";
import { IOfferListTranslations } from "../../interfaces";
import { ApplyFiltersTitle } from "../ApplyFiltersTitle";

export const ApplyFilters: FunctionComponent<IApplyFiltersProps> = ({
  className,
  filter,
  careers,
  translations,
  withTitle
}) => (
  <div className={className}>
    {withTitle && <ApplyFiltersTitle>{translations?.addFilters}</ApplyFiltersTitle>}
    <ApplyCareerFilters filter={filter} careers={careers} translations={translations} />
  </div>
);

interface IApplyFiltersProps {
  className?: string;
  filter: OfferFilter;
  careers: ICareer[];
  translations?: IOfferListTranslations;
  withTitle: boolean;
}
