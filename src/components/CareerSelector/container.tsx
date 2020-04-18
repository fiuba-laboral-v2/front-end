import React, { FunctionComponent } from "react";
import { ICareerSelectorContainerProps } from "./interface";
import { CareerSelector } from "./compontent";
import { useTranslations } from "$hooks/translations";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS } from "$queries";


export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const {
    translations,
    error: translationsError,
    loading: loadingTranslations
  } = useTranslations("careerSelector");

  const {
    data: { getCareers } = { getCareers: [] },
    error: careersError,
    loading: loadingCareers
  } = useQuery(GET_CAREERS);

  if (translationsError || loadingTranslations || careersError || loadingCareers) return (<div/>);

  return (
    <CareerSelector
      careerLabel={translations.careerLabel}
      creditsLabel={translations.creditsLabel}
      options={getCareers}
      {...props}
    />
  );
};
