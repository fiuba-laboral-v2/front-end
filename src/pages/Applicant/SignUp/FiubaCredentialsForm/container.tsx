import React, { Fragment, FunctionComponent } from "react";
import { FiubaCredentialsForm } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations } from "./interfaces";

export const FiubaCredentialsFormContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("applicantCredentialsFields");
  if (!translations) return <Fragment/>;
  return <FiubaCredentialsForm translations={translations}/>;
};
