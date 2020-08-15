import React, { Fragment, FunctionComponent } from "react";
import { ICareerSelectorContainerProps, ICareerSelectorTranslations } from "./interface";
import { CareerSelector } from "./compontent";
import { useTranslations } from "$hooks";
import { useQuery } from "@apollo/client";
import { GET_CAREERS } from "$queries";

export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const translations = useTranslations<ICareerSelectorTranslations>("careerSelector");
  const {
    data: { getCareers } = { getCareers: [] },
    error,
    loading
  } = useQuery(GET_CAREERS);
  if (!translations || error || loading) return <Fragment/>;

  return (
    <CareerSelector
      translations={translations}
      options={getCareers}
      {...props}
    />
  );
};
