import React, { Fragment, FunctionComponent } from "react";
import { ICareerSelectorContainerProps, ICareerSelectorTranslations } from "./interface";
import { CareerSelector } from "./compontent";
import { useTranslations } from "$hooks/translations";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAREERS } from "$queries";

export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const translations = useTranslations<ICareerSelectorTranslations>("careerSelector");

  const {
    data: { getCareers } = { getCareers: [] },
    error: careersError,
    loading: loadingCareers
  } = useQuery(GET_CAREERS);

  if (translations.loading || translations.error) return <Fragment/>;
  if (careersError || loadingCareers) return <Fragment/>;

  return (
    <CareerSelector
      careerLabel={translations.data.career}
      creditsLabel={translations.data.credits}
      options={getCareers}
      {...props}
    />
  );
};
