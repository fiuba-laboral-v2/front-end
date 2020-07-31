import React, { Fragment, FunctionComponent } from "react";
import { ICareerSelectorContainerProps, ICareerSelectorTranslations } from "./interface";
import { CareerSelector } from "./compontent";
import { useTranslations } from "$hooks";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS } from "$queries";

export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const translations = useTranslations<ICareerSelectorTranslations>("careerSelector");

  const {
    data: { getCareers } = { getCareers: [] },
    error: careersError,
    loading: loadingCareers
  } = useQuery(GET_CAREERS);
  if (!translations || careersError || loadingCareers) return <Fragment/>;

  return (
    <CareerSelector
      careerLabel={translations.career}
      creditsLabel={translations.credits}
      options={getCareers}
      {...props}
    />
  );
};
