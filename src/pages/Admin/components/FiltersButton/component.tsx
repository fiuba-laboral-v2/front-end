import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";

export const FiltersButton: FunctionComponent<IComponentProps> = ({
  onClick,
  showFilter,
  translations
}) => (
  <Button kind="primary" onClick={onClick}>
    {showFilter ? translations?.cleanFilters : translations?.filters}
  </Button>
);
