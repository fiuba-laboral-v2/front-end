import React, { Fragment, FunctionComponent } from "react";
import { ICareerSelectorContainerProps, ICareerSelectorTranslations } from "./interface";
import { CareerSelector } from "./component";
import { useTranslations, useCareers } from "$hooks";

export const CareerSelectorContainer: FunctionComponent<ICareerSelectorContainerProps> = props => {
  const translations = useTranslations<ICareerSelectorTranslations>("careerSelector");
  const careersResponse = useCareers();
  if (!translations || careersResponse.error || careersResponse.loading) return <Fragment />;

  return (
    <CareerSelector
      translations={translations}
      options={careersResponse.data.getCareers}
      {...props}
    />
  );
};
