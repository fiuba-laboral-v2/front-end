import React, { FunctionComponent } from "react";
import { ICareerSelectorContainerProps } from "./interface";
import { CareerSelector } from "./compontent";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, GET_TRANSLATIONS } from "$queries";

export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, {
    variables: { paths: ["applicant.signUp.career", "applicant.signUp.credits"] }
  });

  const {
    data: { getCareers } = { getCareers: [] },
    error: careersError,
    loading: loadingCareers
  } = useQuery(GET_CAREERS);

  if (translationsError || loadingTranslations || careersError || loadingCareers) return (<div/>);

  const [
    careerLabel,
    creditsLabel
  ] = getTranslations;

  return (
    <CareerSelector
      careerLabel={careerLabel}
      creditsLabel={creditsLabel}
      options={getCareers}
      {...props}
    />
  );
};
