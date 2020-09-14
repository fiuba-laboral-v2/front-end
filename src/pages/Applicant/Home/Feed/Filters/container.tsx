import React, { Fragment, FunctionComponent } from "react";
import { Filters } from "./component";
import { useCareers } from "$hooks/queries";
import { IFiltersContainerProps } from "./interface";

export const FiltersContainer: FunctionComponent<IFiltersContainerProps> = (
  {
    className,
    translations,
    filter
  }
) => {
  const careers = useCareers().data?.getCareers;
  if (!careers) return <Fragment/>;
  return <Filters
    careers={careers}
    filter={filter}
    className={className}
    translations={translations}
  />;
};
