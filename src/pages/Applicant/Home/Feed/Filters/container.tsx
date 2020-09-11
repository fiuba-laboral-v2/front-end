import React, { Fragment, FunctionComponent } from "react";
import { Filters } from "./component";
import { useCareers } from "$hooks/queries";
import { useLocation } from "react-router-dom";
import { IFiltersContainerProps } from "./interface";
import { OfferFilter } from "$models/OfferFilter";

export const FiltersContainer: FunctionComponent<IFiltersContainerProps> = ({ className }) => {
  const location = useLocation();
  const careers = useCareers().data?.getCareers;
  if (!careers) return <Fragment/>;
  const filter = new OfferFilter(location.search);
  return <Filters careers={careers} filter={filter} className={className}/>;
};
