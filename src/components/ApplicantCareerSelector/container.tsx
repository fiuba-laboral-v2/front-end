import React, { Fragment, FunctionComponent } from "react";
import { IContainerProps, ITranslations } from "./interfaces";
import { ApplicantCareerSelector } from "./component";
import { useTranslations, useCareers } from "$hooks";

export const ApplicantCareerSelectorContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("applicantCareerSelector");
  const careers = useCareers();
  if (!translations || !careers) return <Fragment />;

  return <ApplicantCareerSelector translations={translations} options={careers} {...props} />;
};
