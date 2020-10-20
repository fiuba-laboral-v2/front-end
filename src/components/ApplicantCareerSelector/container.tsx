import React, { Fragment, FunctionComponent } from "react";
import { IContainerProps, ITranslations } from "./interface";
import { ApplicantCareerSelector } from "./component";
import { useTranslations, useCareers } from "$hooks";

export const ApplicantCareerSelectorContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("applicantCareerSelector");
  const careersResponse = useCareers();
  if (!translations || careersResponse.error || careersResponse.loading) return <Fragment />;

  return (
    <ApplicantCareerSelector
      translations={translations}
      options={careersResponse.data.getCareers}
      {...props}
    />
  );
};
