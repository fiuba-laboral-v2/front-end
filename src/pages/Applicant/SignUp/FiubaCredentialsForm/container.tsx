import React, { Fragment, FunctionComponent } from "react";
import { FiubaCredentialsForm } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const FiubaCredentialsFormContainer: FunctionComponent<IContainer> = ({ className }) => {
  const translations = useTranslations<ITranslations>("fiubaCredentialsForm");
  if (!translations) return <Fragment/>;
  return <FiubaCredentialsForm translations={translations} className={className} />;
};
