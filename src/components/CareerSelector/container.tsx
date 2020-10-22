import React, { Fragment, FunctionComponent } from "react";
import { IContainerProps, ITranslations } from "./interfaces";
import { CareerSelector } from "./component";
import { useTranslations, useCareers } from "$hooks";

export const CareerSelectorContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("careersSelector");
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
