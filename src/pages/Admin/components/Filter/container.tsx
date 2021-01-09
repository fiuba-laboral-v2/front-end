import React from "react";
import { useTranslations } from "$hooks";

import { Filter } from "./component";

import { IContainerProps, ITranslations } from "./interfaces";

export const FilterContainer = <FormVariables,>(props: IContainerProps<FormVariables>) => {
  const translations = useTranslations<ITranslations>("filter");
  return <Filter {...props} translations={translations} children={props.children} />;
};
